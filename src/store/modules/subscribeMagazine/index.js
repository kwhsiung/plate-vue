import hadSubmitClicked from './modules/hadSubmitClicked'
import cart from './modules/cart'
import discounts from './modules/discounts'
import coupon from './modules/coupon'

export default {
  namespaced: true,
  modules: {
    ui: {
      ...hadSubmitClicked
    },
    cart,
    discounts,
    coupon
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
