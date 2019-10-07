<template>
  <div class="receipt-product">
    <h1 class="receipt-product__title">
      訂單資訊
    </h1>
    <table class="receipt-product__table table">
      <tbody>
        <tr>
          <td>
            訂單編號
          </td>
          <td>
            M123123123123
          </td>
        </tr>
        <tr>
          <td>
            訂單日期
          </td>
          <td>
            2019-12-25
          </td>
        </tr>
        <tr>
          <td>
            訂單內容
          </td>
          <td>
            <SubTablePriceTotal
              class="table__price-total-table table__price-total-table--desktop"
              :items="[
                {
                  itemTitle: '商品總計商品總計商品總計',
                  itemPrice: 999
                },
                {
                  itemTitle: '-112',
                  itemPrice: -1000
                }
              ]"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <SubTablePriceTotal
      class="table__price-total-table table__price-total-table--mobile"
      :items="[
        {
          itemTitle: '商品總計商品總計商品總計',
          itemPrice: 999
        },
        {
          itemTitle: '-112',
          itemPrice: -1000
        }
      ]"
    />
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
  &__table
    margin 11px 0 0 0

.table
  border-collapse collapse
  td
    vertical-align top
    color #4a4a4a
    font-size 15px
    padding 9px 0
  td:first-child
    min-width 145px
  td:nth-child(2)
    width 100%
  &__price-total-table
    &--desktop
      display flex
    &--mobile
      display none

@media (max-width 768px)
  .receipt-product
    &__title
      font-size 22px
    &__table
      margin 18px 0 0 0

  .table
    td
      padding 6px 0
    td:first-child
      min-width 100px
    &__price-total-table
      margin 6px 0 0 0
      &--desktop
        display none
      &--mobile
        display flex
</style>
