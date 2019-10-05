<template>
  <div class="table-wrapper">
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
  </div>
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
.table-wrapper
  display flex
  flex-direction column
  align-items center
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

@media (max-width 768px)
  .table-wrapper
    &__count-table
      td:first-child
        max-width 25vw
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>
