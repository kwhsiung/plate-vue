export default {
  namespaced: true,
  state() {
    return {
      picked: ''
    }
  },
  mutations: {
    SET_VALUE(state, value) {
      state.picked = value
    }
  }
}
