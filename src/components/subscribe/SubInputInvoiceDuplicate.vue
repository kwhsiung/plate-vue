<template>
  <div class="invoice-duplicate">
    <div class="invoice-duplicate__radio-wrapper radio-wrapper">
      <SubInputNativeRadio
        class="radio-wrapper__radio"
        name="invoice"
        required
        :radio-value="'duplicate'"
        v-model="pickedInvoiceType"
      >
        二聯式發票（含載具）
      </SubInputNativeRadio>
    </div>
    <SubInputNativeSelect
      v-show="radioChecked"
      class="invoice-duplicate__input"
      v-model="pickedDuplicate"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        v-text="option.name"
      />
    </SubInputNativeSelect>
    <SubInput
      v-show="radioChecked"
      class="invoice-duplicate__input"
      type="text"
      :required="radioChecked"
      :placeholder="placeholder"
      v-model="inputDuplicate"
    />
  </div>
</template>

<script>
import SubInput from './SubInput.vue'
import SubInputNativeRadio from './SubInputNativeRadio.vue'
import SubInputNativeSelect from './SubInputNativeSelect.vue'

import _ from 'lodash'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('subscribeMagazine')

import mixinInvoice from './mixins/invoice'

export default {
  components: {
    SubInput,
    SubInputNativeRadio,
    SubInputNativeSelect
  },
  mixins: [ mixinInvoice('duplicate') ],
  data() {
    return {
      options: [
        {
          name: 'Email 載具',
          value: 'email',
          placeholder: '如：service@mirrormedia.mg'
        },
        {
          name: '手機條碼載具',
          value: 'mobile-barcode',
          placeholder: '如：/1234ABC'
        },
        {
          name: '自然人憑證條碼',
          value: 'natural-person',
          placeholder: '如：AB00001234567890'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      pickedDuplicateStore: state => state.invoice.pickedDuplicate,
      inputDuplicateStore: state => state.invoice.inputDuplicate
    }),
    pickedDuplicate: {
      get() {
        return this.pickedDuplicateStore
      },
      set(value) {
        this.SET_VALUE_INVOICE({ key: 'pickedDuplicate', value })
      }
    },
    inputDuplicate: {
      get() {
        return this.inputDuplicateStore
      },
      set(value) {
        this.SET_VALUE_INVOICE({ key: 'inputDuplicate', value })
      }
    },
    placeholder() {
      const option = _.find(this.options, [ 'value', this.pickedDuplicate ])
      return _.get(option, 'placeholder', '')
    }
  },
  watch: {
    pickedDuplicate() {
      this.SET_VALUE_INVOICE({ key: 'inputDuplicate', value: '' })
    }
  },
  methods: {
    ...mapMutations({
      SET_VALUE_INVOICE: 'invoice/SET_VALUE'
    })
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
