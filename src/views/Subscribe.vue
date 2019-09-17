<template>
  <section>
    <SubHeader />
    <SubPlan :duration="1" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubPlan from 'src/components/subscribe/SubPlan.vue'

export default {
  components: {
    SubHeader,
    SubPlan
  }
}
</script>

<style lang="stylus" scoped>

</style>
