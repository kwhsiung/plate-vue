<template>
  <div>
    <p
      :class="[
        'price',
        { 'price--line-through': isOnSale }
      ]"
    >
      原價 {{ priceOriginal | toLocaleString }}
    </p>
    <p
      v-if="isOnSale"
      class="price-on-sale"
    >
      優惠價 ${{ priceOnSale | toLocaleString }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    priceOriginal: {
      type: Number,
      required: true
    },
    priceOnSale: {
      type: Number,
      default: 0
    }
  },
  filters: {
    toLocaleString (value) {
      return value.toLocaleString()
    }
  },
  computed: {
    isOnSale() {
      return this.priceOnSale > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.price
  font-size 26px
  color #9b9b9b
  margin 0
  &--line-through
    text-decoration line-through

.price-on-sale
  font-size 32px
  color #e81831
  margin 16px 0 0 0
</style>
