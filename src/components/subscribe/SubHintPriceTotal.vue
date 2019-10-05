<template>
  <Div class="table-wrapper">
    <h1 class="table-wrapper__title">
      訂單資訊
    </h1>
    <SubTablePriceTotal
      class="table-wrapper__count-table"
      :items="items"
    />
  </Div>
</template>

<script>
import Div from './SubDiv.vue'
import SubTablePriceTotal from './SubTablePriceTotal.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Div,
    SubTablePriceTotal
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
    width 100%
  &__title
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a
    width 100%

@media (max-width 768px)
  .table-wrapper
    &__count-table
      margin 24px 0 0 0
    &__title
      font-size 22px
</style>
