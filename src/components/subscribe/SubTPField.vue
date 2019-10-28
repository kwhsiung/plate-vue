<template>
  <div class="tpfield" />
</template>

<style lang="stylus" scoped>
.tpfield
  width 100%
  height 44px
  border-radius 4px
  box-shadow inset 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
  background-color #f5f5f5
  border 1px solid transparent
  padding 11px 9px
  font-size 15px
  color #4a4a4a
  transition border .2s ease-out
  // &:invalid.show-validate
  //   border 2px solid rgba(232, 24, 49, 0.5)
  //   & + .validate-error-text
  //     display block
  // &:focus
  //   border 2px solid rgba(6, 79, 119, 0.5) !important
  // &::placeholder
  //   color #9b9b9b
  // // Hide the HTML5 number input’s spin box
  // &::-webkit-outer-spin-button,
  // &::-webkit-inner-spin-button {
  //     /* display: none; <- Crashes Chrome on hover */
  //     -webkit-appearance: none;
  //     margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  // }
  // &[type=number] {
  //     -moz-appearance: textfield; /* Firefox */
  // }
</style>
