<template>
  <div class="invoice-triplicate">
    <div class="invoice-triplicate__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        name="invoice"
        required
        :radio-value="'triplicate'"
        v-model="invoice"
      >
        三聯式發票
      </SubInputNativeRadio>
    </div>
    <SubInput
      v-show="radioChecked"
      class="invoice-triplicate__input"
      type="text"
      :required="radioChecked"
      placeholder="請輸入抬頭"
    />
    <SubInput
      v-show="radioChecked"
      class="invoice-triplicate__input"
      type="text"
      :required="radioChecked"
      placeholder="請輸入統一編號 8 位數字"
    />
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
      return this.pickedInvoice === 'triplicate'
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
