export default {
  namespaced: true,
  state() {
    return {
      checked: false
    }
  },
  mutations: {
    TOGGLE_CHECKED(state, value) {
      state.checked = value
    }
  }
}
