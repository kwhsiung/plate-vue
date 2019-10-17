<template>
  <section class="sub">
    <SubHeader
      id="sub-form-header"
      class="sub__header"
      :active-state-index="2"
    />
    <section
      id="sub-form-section"
      class="sub__section section"
    >
      <main class="section__main main">
        <form
          class="main__form form"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                訂購項目
              </h1>
              <button
                class="button button--normal"
                @click.prevent="backToSubscribePlans"
              >
                修改
              </button>
            </header>
            <div class="form-section__block">
              <SubTableCart />
            </div>
            <div class="form-section__block">
              <SubInputCoupon />
            </div>
          </section>
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                訂購人
              </h1>
            </header>
            <div class="form-section__block">
              <label class="form-section__label">
                姓名
                <SubInput
                  class="form-section__input form-section__input--m"
                  type="text"
                  required
                  v-model="subscriberName"
                />
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                手機
                <SubInput
                  class="form-section__input form-section__input--m"
                  type="tel"
                  required
                  v-model="subscriberPhone"
                />
              </label>
              <label class="form-section__label">
                市話（非必填）
                <div class="form-section__inner-label-wrapper">
                  <SubInput
                    class="form-section__input form-section__input--s"
                    type="tel"
                    v-model="subscriberPhoneLocal"
                  />
                  <span>-</span>
                  <SubInput
                    class="form-section__input form-section__input--xxs"
                    type="number"
                    placeholder="EXT"
                    v-model="subscriberPhoneLocalExt"
                  />
                </div>
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                通訊地址
                <SubInput
                  class="form-section__input form-section__input--l"
                  type="text"
                  required
                  v-model="subscriberAddress"
                />
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                電子信箱
                <SubInput
                  class="form-section__input form-section__input--l"
                  type="email"
                  required
                  v-model="subscriberEmail"
                />
              </label>
            </div>
          </section>
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                收件人
              </h1>
            </header>
            <div class="form-section__block">
              <SubInputNativeCheckbox
                :checked="isSyncWithSubscriber"
                @change="handleSyncCustomerCheck"
              >
                同訂購人資訊
              </SubInputNativeCheckbox>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                姓名
                <SubInput
                  class="form-section__input form-section__input--m"
                  type="text"
                  required
                  v-model="receiverName"
                />
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                手機
                <SubInput
                  class="form-section__input form-section__input--m"
                  type="tel"
                  required
                  v-model="receiverPhone"
                />
              </label>
              <label class="form-section__label">
                市話（非必填）
                <div class="form-section__inner-label-wrapper">
                  <SubInput
                    class="form-section__input form-section__input--s"
                    type="tel"
                    v-model="receiverPhoneLocal"
                  />
                  <span>-</span>
                  <SubInput
                    class="form-section__input form-section__input--xxs"
                    type="number"
                    placeholder="EXT"
                    v-model="receiverPhoneLocalExt"
                  />
                </div>
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                通訊地址
                <SubInput
                  class="form-section__input form-section__input--l"
                  type="text"
                  required
                  v-model="receiverAddress"
                />
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                電子信箱
                <SubInput
                  class="form-section__input form-section__input--l"
                  type="email"
                  required
                  v-model="receiverEmail"
                />
              </label>
            </div>
            <div class="form-section__block">
              <label class="form-section__label">
                派送備註
                <SubInput
                  class="form-section__input form-section__input--l"
                  type="text"
                  v-model="receiverNote"
                />
              </label>
            </div>
          </section>
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                寄送方式
              </h1>
            </header>
            <div class="form-section__block">
              <p class="form-section__paragraph">
                雜誌每週三出刊，週五前可收到雜誌。欲更改收件地址，請於上班時間來電告知。
              </p>
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <SubInputNativeRadio
                name="delivery"
                :radio-value="'normal'"
                required
                v-model="delivery"
              >
                限時專送 NT$ 0 / 期
              </SubInputNativeRadio>
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <SubInputNativeRadio
                name="delivery"
                :radio-value="'registered'"
                required
                v-model="delivery"
              >
                限時掛號 NT$ 20 / 期
              </SubInputNativeRadio>
            </div>
          </section>
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                電子發票
              </h1>
            </header>
            <div class="form-section__block">
              <p class="form-section__paragraph">
                發票將於完成訂購後 7 個工作天內寄達。
              </p>
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <SubInputLovecode />
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <SubInputInvoiceDuplicate />
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <SubInputInvoiceTriplicate />
            </div>
          </section>
          <section class="form__form-section form-section">
            <div class="form-section__block">
              <SubInputNativeCheckbox
                :checked="agreementChecked"
                @change="handleCheckAgreement"
              >
                我已閱讀並同意：
              </SubInputNativeCheckbox>
            </div>
            <div class="form-section__block">
              <p class="form-section__paragraph form-section__paragraph--indent">
                鏡週刊於行銷目的範圍內得永久彙集。處理及利用本人填寫之訂單資料，並得利用前述資料而為本公司在台灣地區對本人發送活動、服務訊息。本公司對所彙集資料依法保密。本人如有請求停止彙集、處理、利用之需要可書面或致電訂戶組處理 (02) 6636-6800。
              </p>
            </div>
          </section>
          <section class="form__form-section form-section">
            <header class="form-section__form-header form-header">
              <h1 class="form-header__title">
                信用卡
              </h1>
            </header>
            <div class="form-section__block">
              <SubCreditCardLogos />
            </div>
            <div class="form-section__block form-section__block--more-margin">
              <label class="form-section__label">
                卡號
                <SubInput
                  class="form-section__input form-section__input--l"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </label>
            </div>
            <div class="form-section__block form-section__block--row-mobile">
              <label class="form-section__label">
                有效期限
                <SubInput
                  class="form-section__input form-section__input--xs"
                  placeholder="MM / YY"
                  required
                />
              </label>
              <label class="form-section__label">
                卡片後三碼
                <SubInput
                  class="form-section__input form-section__input--xs"
                  placeholder="CVV"
                  required
                />
              </label>
            </div>
          </section>
          <section class="form__form-section form-section">
            <SubButtonSubmit
              class="button button--submit"
            >
              確認訂購
            </SubButtonSubmit>
          </section>
        </form>
      </main>
      <aside
        :class="[
          'section__aside',
          { 'section__aside--fixed': shouldAsideFixed },
          'aside'
        ]"
      >
        <SubHintPriceTotal
          class="aside__item"
          :items="[
            {
              itemTitle: '商品總計商品總計商品總計',
              itemPrice: 999
            },
            {
              itemTitle: '-112',
              itemPrice: -1000
            }
          ]"
        />
        <SubHintDiscount
          class="aside__item aside__item--will-fade-in-up"
          v-for="(item, i) in discounts"
          :key="i"
          :title="item.title"
          :caption="item.caption"
        />
      </aside>
    </section>
    <SubFooter class="sub__footer" />
  </section>
</template>

<script>
import SubHeader from 'src/components/subscribe/SubHeader.vue'
import SubTableCart from 'src/components/subscribe/SubTableCart.vue'
import SubInput from 'src/components/subscribe/SubInput.vue'
import SubInputNativeRadio from 'src/components/subscribe/SubInputNativeRadio.vue'
import SubInputNativeCheckbox from 'src/components/subscribe/SubInputNativeCheckbox.vue'
import SubInputCoupon from 'src/components/subscribe/SubInputCoupon.vue'
import SubInputLovecode from 'src/components/subscribe/SubInputLovecode.vue'
import SubInputInvoiceDuplicate from 'src/components/subscribe/SubInputInvoiceDuplicate.vue'
import SubInputInvoiceTriplicate from 'src/components/subscribe/SubInputInvoiceTriplicate.vue'
import SubCreditCardLogos from 'src/components/subscribe/SubCreditCardLogos.vue'
import SubButtonSubmit from 'src/components/subscribe/SubButtonSubmit.vue'
import SubHintPriceTotal from 'src/components/subscribe/SubHintPriceTotal.vue'
import SubHintDiscount from 'src/components/subscribe/SubHintDiscount.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

import _ from 'lodash'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('subscribeMagazine')

const mixinFixedAside = {
  data() {
    return {
      shouldAsideFixed: false
    }
  },
  methods: {
    createIntersectionObserver() {
      require('intersection-observer')

      const options = {
        rootMargin: '0px 0px -100% 0px'
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.shouldAsideFixed = entry.isIntersecting
        })
      }, options)

      const target = document.querySelector('#sub-form-section')
      observer.observe(target)
    }
  },
  mounted() {
    this.createIntersectionObserver()
  }
}

const getMixinCustomer = () => {
  const keys = [
    'name',
    'phone',
    'phoneLocal',
    'phoneLocalExt',
    'address',
    'email'
  ]
  return {
    computed: {
      ...mapState({
        subscriberData: state => state.customer.subscriber,
        receiverData: state => state.customer.receiver,
        isSyncWithSubscriber: state => state.customer.isSyncWithSubscriber
      }),
  
      ...keys.reduce((map, key) => {
        const name = _.camelCase(`subscriber ${key}`)
        map[name] = {
          get() {
            return this.subscriberData[key]
          },
          set(value) {
            this.SET_VALUE_CUSTOMER({ role: 'subscriber', key, value })
          }
        }
        return map
      }, {}),
      ...keys.reduce((map, key) => {
        const name = _.camelCase(`receiver ${key}`)
        map[name] = {
          get() {
            const data = this.isSyncWithSubscriber ? this.subscriberData : this.receiverData
            return data[key]
          },
          set(value) {
            const role = this.isSyncWithSubscriber ? 'subscriber' : 'receiver'
            this.SET_VALUE_CUSTOMER({ role, key, value })
          }
        }
        return map
      }, {}),
      receiverNote: {
        get() {
          return this.receiverData.note
        },
        set(value) {
          this.SET_VALUE_CUSTOMER({ role: 'receiver', key: 'note', value })
        }
      }
    },
    methods: {
      ...mapMutations({
        SET_VALUE_CUSTOMER: 'customer/SET_VALUE',
        TOGGLE_SYNC_CUSTOMER: 'customer/TOGGLE_SYNC'
      }),
      handleSyncCustomerCheck(value) {
        this.TOGGLE_SYNC_CUSTOMER(value)
      }
    }
  }
}

const mixinDelivery = {
  computed: {
    ...mapState({
      pickedDelivery: state => state.delivery.picked
    }),

    delivery: {
      get() {
        return this.pickedDelivery
      },
      set(value) {
        this.SET_VALUE_DELIVERY(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_VALUE_DELIVERY: 'delivery/SET_VALUE',
    })
  }
}

const mixinAgreement = {
  computed: {
    ...mapState({
      agreementChecked: state => state.agreement.checked
    })
  },
  methods: {
    handleCheckAgreement(value) {
      this.TOGGLE_CHECKED_AGREEMENT(value)
    },
    ...mapMutations({
      TOGGLE_CHECKED_AGREEMENT: 'agreement/TOGGLE_CHECKED',
    })
  }
}

export default {
  components: {
    SubHeader,
    SubTableCart,
    SubInput,
    SubInputNativeRadio,
    SubInputNativeCheckbox,
    SubInputCoupon,
    SubInputLovecode,
    SubInputInvoiceDuplicate,
    SubInputInvoiceTriplicate,
    SubCreditCardLogos,
    SubButtonSubmit,
    SubHintPriceTotal,
    SubHintDiscount,
    SubFooter
  },
  mixins: [
    mixinFixedAside,
    getMixinCustomer(),
    mixinDelivery,
    mixinAgreement
  ],
  computed: {
    ...mapState({
      hadSubmitClicked: state => state.ui.hadSubmitClicked,
      discounts: state => state.discounts.items
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.CLEAR_ITEMS_FROM_CART()
      vm.CLEAR_ITEMS_FROM_DISCOUNT()

      switch (vm.$route.params.yearDuration) {
        case '1':
          vm.PUSH_ITEM_TO_CART({
            title: '一年 52 期，加贈 5 期方案',
            quantity: 1,
            unitPrice: 2880
          })
          vm.PUSH_ITEM_TO_DISCOUNT({
            title: '符合一年方案優惠',
            value: null,
            caption: '贈送 5 期'
          })
          break
        case '2':
          vm.PUSH_ITEM_TO_CART({
            title: '二年份 104 期，加贈 10 期方案',
            quantity: 1,
            unitPrice: 5280
          })
          vm.PUSH_ITEM_TO_DISCOUNT({
            title: '符合二年方案優惠',
            value: null,
            caption: '贈送 10 期'
          })
          break
        default:
          break
      }
    })
  },
  methods: {
    backToSubscribePlans() {
      this.$router.push('/subscribe-magazine-plans')
    },

    ...mapMutations({
      TOGGLE_SUBMIT_STATE_ON: 'ui/TOGGLE_SUBMIT_STATE_ON',
      PUSH_ITEM_TO_CART: 'cart/PUSH_ITEM',
      CLEAR_ITEMS_FROM_CART: 'cart/CLEAR_ITEMS',
      PUSH_ITEM_TO_DISCOUNT: 'discounts/PUSH_ITEM',
      CLEAR_ITEMS_FROM_DISCOUNT: 'discounts/CLEAR_ITEMS',
    }),
    handleSubmit() {
      this.TOGGLE_SUBMIT_STATE_ON()
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.section
  max-width 990px
  margin 0 auto
  padding 50px 0
  display flex
  &__aside
    margin 0 0 0 40px
    &--fixed
      position fixed
      top 50px
      right calc((100% - 990px) / 2)

.main
  width 550px

.aside
  width 400px
  &__item
    &--will-fade-in-up
      opacity 0
      animation-name fadeInUp
      animation-duration .5s
      animation-delay .5s
      animation-timing-function ease-out
      animation-fill-mode forwards
    & + &
      margin 10px 0 0 0

.form
  &__form-section
    & + &
      margin 42px 0 0 0

.form-section
  &__form-header
    & + .form-section__block
      margin 20px 0 0 0
  &__block
    margin 10px 0 0 0
    display flex
    align-items center
    &--more-margin
      margin 20px 0 0 0
  &__label
    display flex
    flex-direction column
    width 100%
    color #4a4a4a
    & + &
      margin 0 0 0 30px
  &__inner-label-wrapper
    margin 0
    span
      margin 0 4px
  &__paragraph
    margin 0
    color #4a4a4a
    font-size 15px
    line-height 1.87
    &--indent
      margin 0 0 0 30px
  &__input
    margin 6px 0 0 0
    &--xxs
      width 65px
    &--xs
      width 112px
    &--s
      width 180px
    &--m
      width 250px
    &--l
      width 100%

.form-header
  display flex
  justify-content space-between
  align-items center
  &__title
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a

.button
  &--normal
    width 72px
    height 36px
    border-radius 4px
    background-color #f5f5f5
    border none
    font-size 15px
    color #4a4a4a
    display flex
    justify-content center
    align-items center
  &--submit
    width 490px
    margin 0 auto

@media (max-width 768px)
  .section
    max-width auto
    margin 0
    padding 10px 8px 26px 8px
    flex-direction column-reverse
    &__aside
      margin 0
      &--fixed
        position static
    &__main
      margin 30px 0 0 0

  .main
    width 100%
    padding 0 14px

  .aside
    width 100%

  .form-section
    &__block
      flex-direction column
      align-items flex-start
      &--row-mobile
        flex-direction row
        .form-section__label + .form-section__label
          margin 0 0 0 50px !important
    &__label
      font-size 15px
      & + &
        margin 10px 0 0 0
    &__inner-label-wrapper
      flex-direction row
    &__input
      margin 6px 0 0 0
      &--xxs
        width 72px
      &--xs
        width 112px
      &--s
        width 180px
      &--m
        width 180px
      &--l
        width 100%

  .form-header
    &__title
      font-size 22px

  .button
    &--submit
      width 100%
</style>
