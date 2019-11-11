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
          <td v-text="date" />
        </tr>
        <tr>
          <td>
            訂單內容
          </td>
          <td>
            <SubTablePriceTotal
              class="table__price-total-table table__price-total-table--desktop"
              :items="totalItems"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <SubTablePriceTotal
      class="table__price-total-table table__price-total-table--mobile"
      :items="totalItems"
    />
  </div>
</template>

<script>
import SubTablePriceTotal from './SubTablePriceTotal.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('subscribeMagazine')

export default {
  components: {
    SubTablePriceTotal
  },
  computed: {
    ...mapGetters([ 'totalItems' ]),
    date() {
      const getFormatDate = () => {
        const d = new Date()
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        const year = d.getFullYear()

        if (month.length < 2) {
          month = '0' + month
        }
        if (day.length < 2) {
          day = '0' + day
        } 

        return [ year, month, day ].join('-')
      }

      return getFormatDate()
    }
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
