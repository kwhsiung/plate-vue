export default {
  namespaced: true,
  state() {
    return {
      subscriber: {
        name: '',
        phone: '',
        phoneLocal: '',
        phoneLocalExt: '',
        address: '',
        email: ''
      },
      receiver: {
        name: '',
        phone: '',
        phoneLocal: '',
        phoneLocalExt: '',
        address: '',
        email: ''
      },
      isSyncWithSubscriber: false
    }
  },
  mutations: {
    SET_VALUE(state, { role, key, value }) {
      state[role][key] = value
    },
    TOGGLE_SYNC(state, value) {
      state.isSyncWithSubscriber = value
    }
  }
}