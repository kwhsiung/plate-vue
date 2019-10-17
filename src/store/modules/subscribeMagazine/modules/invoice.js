export default {
  namespaced: true,
  state() {
    return {
      pickedInvoiceType: 'duplicate',

      inputLovecode: '',

      pickedDuplicate: 'email',
      inputDuplicate: '',

      inputTriplicateTitle: '',
      inputTriplicateTaxId: '',
    }
  },
  mutations: {
    SET_PICKED_INVOICE_TYPE(state, value) {
      state.pickedInvoiceType = value
    },
    SET_VALUE(state, { key, value }) {
      state[key] = value
    }
  }
}
