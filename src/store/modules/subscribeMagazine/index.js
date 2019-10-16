import hadSubmitClicked from './modules/hadSubmitClicked'
import cart from './modules/cart'
import coupon from './modules/coupon'
import discounts from './modules/discounts'
import customer from './modules/customer'

export default {
  namespaced: true,
  modules: {
    ui: {
      ...hadSubmitClicked
    },
    cart,
    discounts,
    coupon,
    customer
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
