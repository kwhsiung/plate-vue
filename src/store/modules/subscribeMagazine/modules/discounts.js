
import * as yup from 'yup'
import Vue from 'vue'
import _ from 'lodash'

const schemaItem = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  value: yup.number().negative().nullable(),
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
    CLEAR_ITEMS(state) {
      Vue.set(state, 'items', [])
    },
    PUSH_ITEM(state, item) {
      schemaItem.validateSync(item)

      if (item.type === 'plan') {
        const clearPlans = state.items.filter(item => item.type !== 'plan')
        Vue.set(state, 'items', clearPlans)
      }

      const itemExist = _.findIndex(state.items, [ 'title', item.title ]) !== -1
      if (!itemExist) {
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
