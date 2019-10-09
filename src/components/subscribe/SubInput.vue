<template>
  <div>
    <!-- The <input>'s data binding and event handler is equal to: -->
    <!-- <input
      :class="{
        'show-validate': shouldShowValidateResult
      }"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('input', $event.target.value)"
    > -->
    <!-- but we can't do that, since we could only have one v-bind and v-on, not multiple -->

    <!-- Some useful references -->
    <!-- Easier creation of wrapper components: https://github.com/vuejs/vue/releases/tag/v2.4.0 -->
    <!-- v-bind: https://vuejs.org/v2/api/#v-bind -->
    <!-- v-on: https://vuejs.org/v2/api/#v-on -->
    <input
      :class="{
        'show-validate': shouldShowValidateResult
      }"
      v-bind="{
        ...$attrs,
        value
      }"
      v-on="{
        ...$listeners,
        input: handleInput
      }"
    >
    <p
      class="validate-error-text"
      v-text="validateErrorText"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('subscribeMagazine')

export default {
  inheritAttrs: false,
  props: {
    value: {
      type: null
    },
    validateErrorText: {
      type: String,
      default: '驗證錯誤'
    }
  },
  computed: {
    ...mapState({
      shouldShowValidateResult: state => state.ui.hadSubmitClicked
    })
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .validate-error-text
    margin 5px 0 0 0
    color #e81831
    font-size 15px
    display none
    text-align right
  div
    display inline-block
  input
    width 100%
    height 44px
    border-radius 4px
    box-shadow inset 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    background-color #f5f5f5
    padding 11px 9px
    font-size 15px
    color #4a4a4a
    border 1px solid transparent
    transition border .2s ease-out
    &:invalid.show-validate
      border 2px solid rgba(232, 24, 49, 0.5)
      & + .validate-error-text
        display block
    &:focus
      border 2px solid rgba(6, 79, 119, 0.5) !important
    &::placeholder
      color #9b9b9b
</style>
