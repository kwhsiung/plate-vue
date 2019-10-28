import hadSubmitClicked from './modules/hadSubmitClicked'
import cart from './modules/cart'
import coupon from './modules/coupon'
import discounts from './modules/discounts'
import customer from './modules/customer'
import delivery from './modules/delivery'
import invoice from './modules/invoice'
import agreement from './modules/agreement'

import _ from 'lodash'

export default {
  namespaced: true,
  modules: {
    ui: {
      ...hadSubmitClicked
    },
    cart,
    discounts,
    coupon,
    customer,
    delivery,
    invoice,
    agreement
  },
  state() {
    return {

    }
  },
  mutations: {

  },
  actions: {
    SEND({ state }) {
      const payload = {
        cart: state.cart,
        discounts: state.discounts.items.filter(item => item.value),
        coupon: state.coupon,
        customer: state.customer,
        delivery: state.delivery,
        invoice: state.invoice
      }

      console.log(payload)
    }
  },
  getters: {
    totalItems(state) {
      const cartItems =
        state.cart.items
          .map(item => ({
            itemTitle: item.title,
            itemPrice: item.unitPrice * item.quantity
          }))

      const discountItems =
        state.discounts.items
          .filter(item => item.value)
          .map(item => ({
            itemTitle: item.title,
            itemPrice: item.value
          }))

      let delivery = {}
      switch (state.delivery.picked) {
        case 'registered': {
          const quantity = _.get(state.cart, [ 'items', 0, 'quantity' ], 1)
          const publicationCount = _.get(state.cart, [ 'items', 0, 'publicationCount' ], 0)
          delivery = {
            itemTitle: '運費總計',
            itemPrice: 20 * publicationCount * quantity
          }
          break
        }
        case 'normal':
        default:
          delivery = {
            itemTitle: '運費總計',
            itemPrice: 0
          }
          break
      }

      return [
        ...cartItems,
        ...discountItems,
        delivery
      ]
    }
  }
}
