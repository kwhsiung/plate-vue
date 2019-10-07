<template>
  <section class="sub">
    <SubHeader
      class="sub__header"
      :active-state-index="2"
    />
    <section class="sub__section section">
      <div class="section__dialog dialog">
        <h1 class="dialog__title">
          訂單建立失敗，請再次下訂單，或聯繫客服專員（02-6633-3805 / readr@readr.tw）協助。
        </h1>
        <SubButtonSubmit
          class="dialog__submit"
        >
          回前頁
        </SubButtonSubmit>
      </div>
    </section>
    <SubFooter class="sub__footer" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubButtonSubmit from 'src/components/subscribe/SubButtonSubmit.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

export default {
  components: {
    SubHeader,
    SubButtonSubmit,
    SubFooter
  }
}
</script>

<style lang="stylus" scoped>
.sub
  &__footer
    position fixed
    left 0
    bottom 0
    width 100%

.section
  max-width 990px
  margin 0 auto
  display flex
  flex-direction column
  align-items center
  padding 50px 0

.dialog
  padding 30px
  background-color #f5f5f5
  border-radius 4px
  width 100%
  display flex
  flex-direction column
  &__title
    margin 0
    font-size 18px
    color #4a4a4a
    font-weight normal
  &__submit
    margin 17px 0 0 0
    width 270px

@media (max-width 768px)
  .section
    max-width auto
    padding 0

  .dialog
    padding 24px
    align-items center
    &__title
      margin 0
      font-size 15px
      color #4a4a4a
      font-weight normal
      line-height 1.87
    &__submit
      margin 27px 0 0 0
      width calc(100% - 20px)
</style>
