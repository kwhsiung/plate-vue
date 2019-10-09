import hadSubmitClicked from './modules/hadSubmitClicked'
import discounts from './modules/discounts'
import coupon from './modules/coupon'

export default {
  namespaced: true,
  modules: {
    ui: {
      ...hadSubmitClicked
    },
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
