export default {
  namespaced: true,
  state() {
    return {
      input: ''
    }
  },
  mutations: {
    SET_INPUT(state, value) {
      state.input = value
    }
  },
  getters: {
    isInputValid(state) {
      return /^MR\d{8}$/.test(state.input)
    }
  }
}
