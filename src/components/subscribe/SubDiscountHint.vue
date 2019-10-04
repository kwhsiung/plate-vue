<template>
  <Div class="hint">
    <p v-text="title" />
    <p v-text="caption" />
  </Div>
</template>

<script>
import Div from './SubDiv.vue'

export default {
  props: {
    title: {
      type: String,
      defaut: ''
    },
    caption: {
      type: String,
      defaut: ''
    }
  },
  components: {
    Div
  }
}
</script>

<style lang="stylus" scoped>
.hint
  color #064f77
  display flex
  justify-content space-between
  p
    margin 0
    font-size 15px
</style>
