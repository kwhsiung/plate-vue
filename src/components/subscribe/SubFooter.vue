<template>
  <footer>
    <ul>
      <li>客服信箱：Service@mirrormedia.mg</li>
      <li>客服專線：02-6633-3882</li>
      <li>服務時間：週一至週五 10:00 - 18:00</li>
    </ul>
    <p><span>精鏡傳媒股份有限公司 </span>© 2016 Mirror Media All Rights Reserved.</p>
  </footer>
</template>

<style lang="stylus" scoped>
footer
  height 85px
  background-color #f5f5f5
  color #4a4a4a
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  font-size 15px
  padding 14px 0

ul
  list-style none
  margin 0
  padding 0
  display flex

li
  display flex
  align-items center
  & + &
    &:before
      content ''
      display inline-block
      width 1px
      height 16px
      background-color #4a4a4a
      margin 0 20px

p
  margin 0

@media (max-width 768px)
  footer
    height auto
    padding 20px 0
    padding-bottom calc(20px + 44px)

  ul
    flex-direction column

  li
    justify-content center
    & + &
      margin 15px 0 0 0
      &:before
        display none
  
  p
    margin 15px 0 0 0
    span
      display none
</style>
