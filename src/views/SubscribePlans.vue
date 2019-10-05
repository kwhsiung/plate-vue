<template>
  <section class="sub">
    <SubHeader class="sub__header" />
    <section class="sub__section section">
      <div class="section__plans plans">
        <SubPlan
          class="plans__plan"
          :year-duartion="1"
          @buttonClick="handleButtonClick(1)"
        />
        <SubPlan
          class="plans__plan"
          :year-duartion="2"
          @buttonClick="handleButtonClick(2)"
        />
      </div>
      <SubCaveat class="section__caveat" />
    </section>
    <SubFooter class="sub__footer" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubPlan from 'src/components/subscribe/SubPlan.vue'
import SubCaveat from 'src/components/subscribe/SubCaveat.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

export default {
  components: {
    SubHeader,
    SubPlan,
    SubCaveat,
    SubFooter
  },
  methods: {
    handleButtonClick(yearDuration = 1) {
      this.$router.push(`/subscribe-magazine-form/${yearDuration}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.section
  max-width 990px
  margin 0 auto
  display flex
  flex-direction column
  align-items center
  padding 50px 0
  &__caveat
    margin 32px 0 0 0

.plans
  display flex
  &__plan
    & + &
      margin 0 0 0 30px

@media (max-width 768px)
  .section
    max-width auto
    padding 10px 8px 30px 8px

  .plans
    width 100%
    flex-direction column
    &__plan
      & + &
        margin 10px 0 0 0
</style>
