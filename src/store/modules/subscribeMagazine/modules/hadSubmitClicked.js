export default {
  namespaced: true,
  state() {
    return {
      hadSubmitClicked: false
    }
  },
  mutations: {
    TOGGLE_SUBMIT_STATE_ON(state) {
      state.hadSubmitClicked = true
    },
    TOGGLE_SUBMIT_STATE_OFF(state) {
      state.hadSubmitClicked = false
    }
  }
}
