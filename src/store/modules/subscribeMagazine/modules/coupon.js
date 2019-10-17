export default {
  namespaced: true,
  state() {
    return {
      checked: false,
      input: ''
    }
  },
  mutations: {
    TOGGLE_CHECKED(state, value) {
      state.checked = value
    },
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
