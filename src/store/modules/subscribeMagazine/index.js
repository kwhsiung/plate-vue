import hadSubmitClicked from './modules/hadSubmitClicked'
import cart from './modules/cart'
import coupon from './modules/coupon'
import discounts from './modules/discounts'
import customer from './modules/customer'
import delivery from './modules/delivery'
import invoice from './modules/invoice'

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
    invoice
  },
  state() {
    return {

    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}
