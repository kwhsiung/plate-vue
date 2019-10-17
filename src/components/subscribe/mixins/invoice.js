import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('subscribeMagazine')

export default (type = '') => {
  if (type === '') {
    throw 'Please provide invoice type when using invoice mixin'
  }

  return {
    computed: {
      ...mapState({
        pickedInvoiceTypeStore: state => state.invoice.pickedInvoiceType
      }),
  
      pickedInvoiceType: {
        get() {
          return this.pickedInvoiceTypeStore
        },
        set(value) {
          this.SET_PICKED_INVOICE_TYPE(value)
        }
      },
      radioChecked() {
        return this.pickedInvoiceType === type
      }
    },
    methods: {
      ...mapMutations({
        SET_PICKED_INVOICE_TYPE: 'invoice/SET_PICKED_INVOICE_TYPE',
      })
    }
  }
}
