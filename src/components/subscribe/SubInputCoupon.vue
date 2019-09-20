<template>
  <div class="coupon">
    <div class="coupon__radio-wrapper radio-wrapper">
      <SubInputRadio
        class="radio-wrapper__radio"
        :checked="radioChecked"
        @change="handleCheck"
      >
        我有續訂折扣碼
      </SubInputRadio>
      <p>
        折扣 80 元、加贈 1 期
      </p>
    </div>
    <SubInput
      v-show="radioChecked"
      class="coupon__input"
      type="text"
    />
  </div>
</template>

<script>
import SubInput from './SubInput.vue'
import SubInputRadio from './SubInputRadio.vue'

export default {
  components: {
    SubInput,
    SubInputRadio
  },
  data() {
    return {
      radioChecked: false
    }
  },
  methods: {
    handleCheck(value) {
      this.radioChecked = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.coupon
  display flex !important
  flex-direction column !important
  align-items flex-start !important
  &__input
    margin 10px 0 0 30px

.radio-wrapper
  display flex
  align-items center
  p
    margin 0 0 0 30px
    font-size 15px
    color #064f77
    position relative
    bottom 1px
</style>
