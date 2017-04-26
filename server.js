const domain = require('domain')
const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const serialize = require('serialize-javascript')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

let indexHTML // generated by html-webpack-plugin
let renderer // created from the webpack-generated server bundle
if (isProd) {
  // in production: create server renderer and index HTML from real fs
  renderer = createRenderer(fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8'))
  indexHTML = parseIndex(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'))
} else {
  // in development: setup the dev server with watch and hot-reload,
  // and update renderer / index HTML on file change.
  require('./build/setup-dev-server')(app, {
    bundleUpdated: bundle => {
      renderer = createRenderer(bundle)
    },
    indexUpdated: index => {
      indexHTML = parseIndex(index)
    }
  })
}

function createRenderer(bundle) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

function parseIndex(template) {
  const contentMarker = '<!-- APP -->'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/favicon-48x48.png'))
app.use('/service-worker.js', serve('./dist/service-worker.js'))
app.use('/manifest.json', serve('./manifest.json'))
app.use('/dist', serve('./dist'))
app.use('/public', serve('./public'))

app.get('*', (req, res, next) => {
  if (req.url.indexOf('/api/') === 0) {
    next()
    return
  }
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    // res.write(indexHTML.head)
    try {
      const { title, meta } = context.meta.inject()
      let _indexHead = indexHTML.head.replace(/<title.*?<\/title>/g, title.text())
      _indexHead = _indexHead.replace(/<meta.*?name="description".*?>/g, meta.text()) 
      res.write(_indexHead)
    } catch (e) {
      res.status(500).end('Internal Error 500')
      console.error(`error during renderStream.once : ${req.url}`)
      console.error(e)
      process.exit(1)
    }
  })

  renderStream.on('data', chunk => {
    try {
      res.write(chunk)
    } catch (e) {
      res.status(500).end('Internal Error 500')
      console.error(`error during renderStream.on data : ${req.url}`)
      console.error(e)
      process.exit(1)
    }
  })

  renderStream.on('end', () => {
    try {
      // embed initial store state
      if (context.initialState) {
        res.write(
          `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
          }</script>`
        )
      }
      res.end(indexHTML.tail)
    } catch (e) {
      res.status(500).end('Internal Error 500')
      console.error(`error during renderStream.on end : ${req.url}`)
      console.error(e)
      process.exit(1)
    }
  })

  let ifPageNotFound = false
  renderStream.on('error', err => {
    if (err && err.code === '404') {
      ifPageNotFound = true
      res.status(404).render('404')
      console.log('##########REQUEST URL(404)############')
      console.log('REQUEST URL:', req.url)
      console.error(err)
      console.log('######################')
      console.log('######################')
      return
    }
    // Render Error Page or Redirect
    res.status(500).end('Internal Error 500')
    console.error(`error during renderStream.on error : ${req.url}`)
    console.error(err)
    process.exit(1)
  })
  res.on('finish', function () {
    if (ifPageNotFound) {
      process.exit(1)
    }
  })
})

app.use('/api', require('./api/index'))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})