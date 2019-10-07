<template>
  <section class="sub">
    <SubHeader
      class="sub__header"
      :active-state-index="3"
    />
    <section class="sub__section section">
      <h1 class="section__title">
        您已完成付款，以下為本次訂購資訊，已同步寄送至您的信箱。
      </h1>
      <SubReceipt
        class="section__receipt receipt"
      />
      <SubCaveat class="section__caveat" />
    </section>
    <SubFooter class="sub__footer" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubReceipt from 'src/components/subscribe/SubReceipt.vue'
import SubCaveat from 'src/components/subscribe/SubCaveat.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

export default {
  components: {
    SubHeader,
    SubReceipt,
    SubCaveat,
    SubFooter
  }
}
</script>

<style lang="stylus" scoped>
.section
  max-width 990px
  margin 0 auto
  display flex
  flex-direction column
  padding 36px 0
  &__title
    font-size 18px
    font-weight normal
    color #4a4a4a
    margin 0
    padding 0 25px
  &__receipt
    margin 36px 0 0 0
  &__caveat
    margin 36px 0 0 0
    padding 0 25px

@media (max-width 768px)
  .section
    max-width auto
    padding 13px 8px 51px 8px
    &__title
      font-size 15px
      line-height 1.87
      padding 0 17px
    &__receipt
      margin 13px 0 0 0
    &__caveat
      margin 20px 0 0 0
      padding 0 17px
</style>
