<template>
  <section class="sub">
    <SubHeader
      class="sub__header"
      :active-state-index="2"
    />
    <section class="sub__section section">
      <div class="section__dialog dialog">
        <h1></h1>
        <button>
          
        </button>
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
.section
  max-width 990px
  margin 0 auto
  display flex
  flex-direction column
  align-items center
  padding 50px 0

@media (max-width 768px)
  .section
    max-width auto
    padding 10px 8px 30px 8px
</style>
