<template>
  <div class="lovecode">
    <div class="lovecode__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        :checked="radioChecked"
        @change="handleCheck"
      >
        捐贈
      </SubInputNativeRadio>
    </div>
    <div v-show="radioChecked">
      <SubInput
        class="lovecode__input"
        type="text"
        placeholder="請輸入愛心碼 8 位數字"
      />
      <a
        class="lovecode__link"
        href="https://www.einvoice.nat.gov.tw/APCONSUMER/BTC603W/"
        target="_blank"
        rel="noopener noreferrer"
        v-text="'查詢愛心碼'"
      />
    </div>
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
.lovecode
  display flex  
  flex-direction column 
  align-items flex-start  
  margin 0
  &__input
    margin 10px 0 0 30px
    width 220px
  &__link
    color #1b7aae
    text-decoration underline
    margin 0 0 0 10px

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
  .lovecode
    &__link
      display block
      margin 10px 0 0 30px
</style>
