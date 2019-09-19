<template>
  <Div class="table-wrapper">
    <h1>訂單資訊</h1>
    <table class="table-wrapper__count-table count-table">
      <tbody>
        <tr
          v-for="item in items"
          :key="item.itemTitle"
        >
          <td v-text="item.itemTitle" />
          <td>
            {{ isValueNegative(item.itemPrice) ? '-' : '' }} NT$ {{ item.itemPrice | toAbs | toLocaleString }}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table-wrapper__total-table total-table">
      <tbody>
        <tr>
          <td>總計</td>
          <td>
            {{ isValueNegative(itemPriceTotal) ? '-' : '' }} NT$ {{ itemPriceTotal | toAbs | toLocaleString }}
          </td>
        </tr>
      </tbody>
    </table>
  </Div>
</template>

<script>
import Div from './SubDiv.vue'

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
  components: {
    Div
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
.table-wrapper
  display flex
  flex-direction column
  align-items center
  &__count-table
    margin 26px 0 0 0
  h1
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a
    width 100%
  table
    font-size 15px
    color #4a4a4a
    width calc(100% + 7px + 7px)
    border-collapse collapse
    &.count-table
      border-bottom 1px solid #4a4a4a
      td
        padding 0 7px 14px 7px
    &.total-table
      td
        padding 14px 7px 0 7px
  td
    &:last-child
      text-align right
</style>
