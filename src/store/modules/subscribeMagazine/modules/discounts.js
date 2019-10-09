
import * as yup from 'yup'
import Vue from 'vue'

const schemaItem = yup.object().shape({
  title: yup.string().required(),
  caption: yup.string().required()
})

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  mutations: {
    PUSH_ITEM(state, item) {
      if (schemaItem.validateSync(item)) {
        state.items.push(item)
      }
    },
    REMOVE_ITEM(state, itemMatch) {
      const filteredOut = state.items.filter(item => {
        const { title: titleMatch, caption: captionMatch } = itemMatch
        const { title, caption } = item
        return titleMatch !== title && captionMatch !== caption
      })

      Vue.set(state, 'items', filteredOut)
    }
  }
}
