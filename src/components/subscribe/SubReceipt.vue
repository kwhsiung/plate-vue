<template>
  <section class="receipt">
    <SubReceiptProduct />
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
.receipt
  width 100%
  height 1000px
  background-color #f5f5f5
  border-radius 4px
  padding 22px 25px
</style>
