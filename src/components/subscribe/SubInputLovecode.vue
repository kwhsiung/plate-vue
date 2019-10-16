<template>
  <div class="lovecode">
    <div class="lovecode__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        name="invoice"
        required
        :radio-value="'lovecode'"
        v-model="invoice"
      >
        捐贈
      </SubInputNativeRadio>
    </div>
    <div v-show="radioChecked">
      <SubInput
        class="lovecode__input"
        type="text"
        :required="radioChecked"
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

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('subscribeMagazine')

const mixinInvoice = {
  computed: {
    ...mapState({
      pickedInvoice: state => state.invoice.picked
    }),

    invoice: {
      get() {
        return this.pickedInvoice
      },
      set(value) {
        this.SET_VALUE_INVOICE(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_VALUE_INVOICE: 'invoice/SET_VALUE',
    })
  }
}

export default {
  components: {
    SubInput,
    SubInputNativeRadio
  },
  mixins: [ mixinInvoice ],
  computed: {
    radioChecked() {
      return this.pickedInvoice === 'lovecode'
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
