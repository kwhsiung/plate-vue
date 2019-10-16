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
      ref="input"
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
      v-text="invalidHint"
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
    }
  },
  data() {
    return {
      invalidHintValueMissing: '此為必填欄位',
      invalidHintDefault: '格式錯誤',
      invalidHint: ''
    }
  },
  computed: {
    ...mapState({
      shouldShowValidateResult: state => state.ui.hadSubmitClicked
    })
  },
  watch: {
    value() {
      this.$nextTick(() => {
        this.invalidHint = this.getInvalidHint()
      })
    },
    shouldShowValidateResult(value) {
      if (value) {
        this.invalidHint = this.getInvalidHint()
      }
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    getInvalidHint() {
      if (this.shouldShowValidateResult) {
        const input = this.$refs.input
        const { valid, valueMissing } = input.validity
        if (!valid && valueMissing) {
          return this.invalidHintValueMissing
        } else if (!valid) {
          return this.invalidHintDefault
        } else {
          return ''
        }
      } else {
        return ''
      }
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
    // Hide the HTML5 number input’s spin box
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    &[type=number] {
        -moz-appearance: textfield; /* Firefox */
    }
</style>
