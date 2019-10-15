<template>
  <div class="coupon">
    <div class="coupon__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        :checked="radioChecked"
        @change="handleCheck"
      >
        我有續訂折扣碼
      </SubInputNativeRadio>
      <p v-show="isCouponInputValid">
        折扣 80 元、加贈 1 期
      </p>
    </div>
    <SubInput
      v-show="radioChecked"
      class="coupon__input"
      type="text"
      required
      :validate-error-text="'尚未填寫'"
      v-model="couponCode"
    />
  </div>
</template>

<script>
import SubInput from './SubInput.vue'
import SubInputNativeRadio from './SubInputNativeRadio.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapGetters } = createNamespacedHelpers('subscribeMagazine')

export default {
  components: {
    SubInput,
    SubInputNativeRadio
  },
  data() {
    return {
      radioChecked: false
    }
  },
  computed: {
    ...mapState({
      couponInput: state => state.coupon.input
    }),
    ...mapGetters({
      isCouponInputValid: 'coupon/isInputValid'
    }),
    couponCode: {
      get() {
        return this.couponInput
      },
      set(value) {
        this.SET_INPUT_COUPON(value)
      }
    }
  },
  watch: {
    isCouponInputValid() {
      const discount = {
        title: '符合續訂優惠',
        value: -80,
        caption: '贈送 1 期'
      }

      if (this.isCouponInputValid) {
        this.PUSH_ITEM_TO_DISCOUNT(discount)
      } else {
        this.REMOVE_ITEM_FROM_DISCOUNT(discount)
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_INPUT_COUPON: 'coupon/SET_INPUT',
      PUSH_ITEM_TO_DISCOUNT: 'discounts/PUSH_ITEM',
      REMOVE_ITEM_FROM_DISCOUNT: 'discounts/REMOVE_ITEM'
    }),
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
  margin 0 !important
  &__input
    margin 10px 0 0 30px
    width 220px

.radio-wrapper
  display flex
  align-items center
  p
    margin 0 0 0 30px
    font-size 15px
    color #064f77
    position relative
    bottom 1px

@media (max-width 768px)
  .radio-wrapper
    flex-direction column
    p
      margin 10px 0 0 0
      // padding 0 0 0 30px
      transform translate(26px, 0)
</style>
