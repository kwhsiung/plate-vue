import * as yup from 'yup'
import Vue from 'vue'
import _ from 'lodash'

const schemaItem = yup.object().shape({
  title: yup.string().required(),
  quantity: yup.number().positive().required(),
  unitPrice: yup.number().positive().required()
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
      if (schemaItem.validateSync(item)) {
        state.items.push(item)
      }
    },
    REMOVE_ITEM(state, itemMatch) {
      const filteredOut = state.items.filter(item => {
        const { title: titleMatch } = itemMatch
        const { title } = item
        return titleMatch !== title
      })

      Vue.set(state, 'items', filteredOut)
    },
    UPDATE_ITEM_QUANTITY(state, { title, quantity = 1 }) {
      const item = _.find(state.items, [ 'title', title ])
      item.quantity = quantity
    }
  }
}
