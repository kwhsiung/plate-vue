<template>
  <footer class="hint">
    <button
      class="hint__button"
      @click="$emit('backToTop')"
    >
      查看訂單資訊
    </button>
    <div
      class="hint__total-text"
    >
      總計
    </div>
    <div
      class="hint__total"
    >
      {{ isValueNegative(itemPriceTotal) ? '-' : '' }} NT$ {{ itemPriceTotal | toAbs | toLocaleString }}
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      validator(value) {
        return value.reduce((acc, curr) =>
          acc &&
          ('itemTitle' in curr) &&
          (('itemPrice' in curr) && typeof curr.itemPrice === 'number'),
          true
        )
      }
    }
  },
  filters: {
    toLocaleString (value) {
      return value.toLocaleString()
    },
    toAbs (value) {
      return Math.abs(value)
    }
  },
  computed: {
    itemPriceTotal() {
      return this.items.reduce((acc, curr) => acc + curr.itemPrice, 0)
    }
  },
  methods: {
    isValueNegative(value) {
      return value < 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.hint
  width 100%
  height 44px
  display flex
  background-color #f5f5f5
  box-shadow 0 -1px 1px 0 rgba(0, 0, 0, 0.1)
  font-size 15px
  &__button
    flex 1 1 auto
    display flex
    justify-content center
    align-items center
    background-color #064f77
    color white
    border none
    outline none
    padding 0
  &__total-text
    flex 1 1 auto
    display flex
    justify-content center
    align-items center
    color #4a4a4a
  &__total
    flex 1 1 auto
    display flex
    justify-content center
    align-items center
    color #4a4a4a
</style>
