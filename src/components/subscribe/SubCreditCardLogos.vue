<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="/assets/mirrormedia/icon/creditcard-visa.jpg"
      alt="credit-card-visa"
    >
    <img
      class="wrapper__img"
      src="/assets/mirrormedia/icon/creditcard-master.jpg"
      alt="credit-card-visa"
    >
    <img
      class="wrapper__img"
      src="/assets/mirrormedia/icon/creditcard-jcb.jpg"
      alt="credit-card-visa"
    >
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  display flex
  &__img
    width 34px
    & + &
      margin 0 0 0 10px
</style>
