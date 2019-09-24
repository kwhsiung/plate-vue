<template>
  <div class="invoice-triplicate">
    <div class="invoice-triplicate__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        :checked="radioChecked"
        @change="handleCheck"
      >
        三聯式發票
      </SubInputNativeRadio>
    </div>
    <SubInput
      v-show="radioChecked"
      class="invoice-triplicate__input"
      type="text"
      placeholder="請輸入抬頭"
    />
    <SubInput
      v-show="radioChecked"
      class="invoice-triplicate__input"
      type="text"
      placeholder="請輸入統一編號 8 位數字"
    />
  </div>
</template>

<script>
import SubInput from './SubInput.vue'
import SubInputNativeRadio from './SubInputNativeRadio.vue'

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
  methods: {
    handleCheck(value) {
      this.radioChecked = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.invoice-triplicate
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
</style>
