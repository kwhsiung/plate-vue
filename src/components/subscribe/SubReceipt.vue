<template>
  <section class="receipts">
    <SubReceiptProduct
      class="receipts__receipt"
    />
    <SubReceiptCustomer
      class="receipts__receipt"
    />
  </section>
</template>

<script>
import SubReceiptProduct from './SubReceiptProduct.vue'
import SubReceiptCustomer from './SubReceiptCustomer.vue'

export default {
  components: {
    SubReceiptProduct,
    SubReceiptCustomer
  }
}
</script>

<style lang="stylus" scoped>
.receipts
  width 100%
  background-color #f5f5f5
  border-radius 4px
  padding 22px 25px
  &__receipt
    & + &
      margin 42px 0 0 0

@media (max-width 768px)
  .receipts
    padding 22px 17px
    &__receipt
      & + &
        margin 37px 0 0 0
</style>
