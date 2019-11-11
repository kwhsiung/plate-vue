<template>
  <header>
    <ol>
      <li
        v-for="(state, i) in states"
        :key="state"
        :class="{
          'active': i <= activeStateIndex - 1
        }"
      >
        <span v-text="state" />
      </li>
    </ol>
  </header>
</template>

<script>
export default {
  props: {
    states: {
      type: Array,
      default: () => [ '方案選擇', '確認訂購', '付款完成' ]
    },
    activeStateIndex: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  width 100%
  height 126px
  background-color #064f77
  display flex
  justify-content center
  align-items center

ol
  margin 0
  padding 0
  counter-reset custom-counter
  display flex

li:after
  content counter(custom-counter)
  width 40px
  height 40px
  border-radius 100%
  background-color #9b9b9b
  display flex
  justify-content center
  align-items center
  color #064f77
  font-size 26px
  font-weight 600
  margin 0 12px 0 0
li.active:after
  background-color white

li
  counter-increment custom-counter
  display flex
  flex-direction row-reverse
  align-items center
  font-size 26px
  color #9b9b9b
  & + &
    &:before
      order 1
      content ''
      width 67px
      height 2px
      background-color #9b9b9b
      border-radius 0
      margin 0 20px
  &.active
    color white
    &:before
      background-color white

@media (max-width 768px)
  header
    height 100px

  li:after
    width 30px
    height 30px
    font-size 18px
    margin 0 7px 0 0
    
  li
    font-size 15px
    & + &
      &:before
        width 16px
        margin 0 15px

    span
      width 33px
      height 44px
      line-height 1.5
</style>
