<template>
  <table>
    <thead>
      <tr>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in cartItems"
        :key="item.title"
      >
        <td v-text="item.title" />
        <td>
          <SubInputCounter
            @updateValue="v => handleUpdateValue(v, item.title)"
          />
        </td>
        <td>NT$ {{ item.unitPrice | toLocaleString }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import SubInputCounter from './SubInputCounter.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('subscribeMagazine')

export default {
  filters: {
    toLocaleString(value) {
      return value.toLocaleString()
    }
  },
  components: {
    SubInputCounter
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.items
    })
  },
  methods: {
    ...mapMutations({
      UPDATE_ITEM_QUANTITY: 'cart/UPDATE_ITEM_QUANTITY'
    }),
    handleUpdateValue(value, itemTitle) {
      this.UPDATE_ITEM_QUANTITY({ title: itemTitle, quantity: value })
    }
  }
}
</script>

<style lang="stylus" scoped>
table
  width 100%
  border-collapse collapse
  color #4a4a4a

thead
  border-bottom 1px solid #4a4a4a
  font-size 15px

tbody
  font-size 18px

th, td
  font-weight normal
  padding 14px 0
  text-align right
  &:first-child
    text-align left

th
  padding 0 0 14px 0

@media (max-width 768px)
  tbody
    font-size 15px

  th, td
    text-align left
    &:nth-child(2)
      text-align right
      min-width 50px
    &:nth-child(3)
      text-align right
      min-width 100px

  tbody
    td
      &:nth-child(1)
        line-height 1.5
</style>
