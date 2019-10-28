export default {
  namespaced: true,
  state() {
    return {
      picked: 'normal'
    }
  },
  mutations: {
    SET_VALUE(state, value) {
      state.picked = value
    }
  }
}