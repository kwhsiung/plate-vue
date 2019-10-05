<template>
  <div class="receipt-product">
    <h1 class="receipt-product__title">
      訂單資訊
    </h1>
  </div>
</template>

<script>
import SubTablePriceTotal from './SubTablePriceTotal.vue'

export default {
  components: {
    SubTablePriceTotal
  }
}
</script>

<style lang="stylus" scoped>
.receipt-product
  &__title
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a
</style>
