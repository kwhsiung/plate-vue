<template>
  <div
    class="counter"
    v-click-outside="handleClickOutside"
  >
    <span
      v-show="!showInput"
      class="counter__value"
      v-text="value"
      @click="showInput = true"
    />
    <div
      v-show="showInput"
      class="counter__input-wrapper input-wrapper"
    >
      <div
        class="input-wrapper__subtract"
        @click="handleCount(-1)"
      />
      <input
        class="input-wrapper__input"
        type="number"
        min="1"
        autofocus
        v-model.number="value"
      >
      <div
        class="input-wrapper__add"
        @click="handleCount(1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'click-outside': {
      bind (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  props: {
    dafaultValue: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      internalValue: this.dafaultValue,
      showInput: false
    }
  },
  computed: {
    value: {
      get() {
        return this.internalValue
      },
      set(value) {
        if (value <= 0) {
          this.internalValue = 1
        } else {
          this.internalValue = value
        }

        this.$emit('updateValue', this.internalValue)
      }
    }
  },
  methods: {
    handleCount(value) {
      this.value += value
    },
    handleClickOutside() {
      this.showInput = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.counter
  &__value
    cursor pointer

.input-wrapper
  display flex
  justify-content flex-end
  align-items center
  &__subtract
    width 16px
    height 4px
    background-color #4a4a4a
    margin 0 10px 0 0
    cursor pointer
  &__input
    width 54px
    height 32px
    border-radius 4px
    box-shadow inset 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    background-color #ffffff
    border solid 2px rgba(27, 122, 174, 0.5)
    text-align center
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
  &__add
    width 16px
    height 4px
    background-color #4a4a4a
    margin 0 0 0 10px
    position relative
    cursor pointer
    &:after
      content ''
      display block
      width 4px
      height 16px
      background-color #4a4a4a
      position absolute
      top calc(-16px / 2 + 4px / 2)
      left calc(16px / 2 - 4px / 2)
</style>
