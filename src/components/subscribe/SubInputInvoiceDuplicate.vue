<template>
  <div class="invoice-duplicate">
    <div class="invoice-duplicate__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        :checked="radioChecked"
        @change="handleCheck"
      >
        二聯式發票（含載具）
      </SubInputNativeRadio>
    </div>
    <SubInputNativeSelect
      v-show="radioChecked"
      class="invoice-duplicate__input"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        v-text="option"
      />
    </SubInputNativeSelect>
    <SubInput
      v-show="radioChecked"
      class="invoice-duplicate__input"
      type="text"
      placeholder="xxxxxx"
    />
  </div>
</template>

<script>
import SubInput from './SubInput.vue'
import SubInputNativeRadio from './SubInputNativeRadio.vue'
import SubInputNativeSelect from './SubInputNativeSelect.vue'

export default {
  components: {
    SubInput,
    SubInputNativeRadio,
    SubInputNativeSelect
  },
  data() {
    return {
      radioChecked: false,
      options: [
        'Email 載具',
        '手機條碼載具',
        '自然人憑證條碼'
      ]
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
.invoice-duplicate
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
