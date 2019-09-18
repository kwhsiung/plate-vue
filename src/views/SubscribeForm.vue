<template>
  <section class="sub">
    <SubHeader
      class="sub__header"
      :active-state-index="2"
    />
    <section class="sub__section section">

    </section>
    <SubFooter class="sub__footer" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

export default {
  components: {
    SubHeader,
    SubFooter
  }
}
</script>

<style lang="stylus" scoped>

</style>
