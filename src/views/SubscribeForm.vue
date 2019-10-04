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
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              訂購項目
            </h1>
            <button
              class="button button--normal"
              @click="backToSubscribePlans"
            >
              修改
            </button>
          </header>
          <div class="form-wrapper__block">
            <SubTableCart />
          </div>
          <div class="form-wrapper__block">
            <SubInputCoupon />
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              訂購人
            </h1>
          </header>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              姓名
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              手機
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
            <label class="form-wrapper__label">
              市話（非必填）
              <div class="form-wrapper__inner-label-wrapper">
                <SubInput
                  class="form-wrapper__input form-wrapper__input--s"
                />
                <span>-</span>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--xxs"
                  placeholder="EXT"
                />
              </div>
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              通訊地址
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              電子信箱
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              收件人
            </h1>
          </header>
          <div class="form-wrapper__block">
            <SubInputNativeCheckbox>
              同訂購人資訊
            </SubInputNativeCheckbox>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              姓名
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              手機
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
            <label class="form-wrapper__label">
              市話（非必填）
              <div class="form-wrapper__inner-label-wrapper">
                <SubInput
                  class="form-wrapper__input form-wrapper__input--s"
                />
                <span>-</span>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--xxs"
                  placeholder="EXT"
                />
              </div>
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              通訊地址
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              電子信箱
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              寄送方式
            </h1>
          </header>
          <div class="form-wrapper__block">
            <p class="form-wrapper__paragraph">
              雜誌每週三出刊，週五前可收到雜誌。欲更改收件地址，請於上班時間來電告知。
            </p>
          </div>
          <div class="form-wrapper__block form-wrapper__block--more-margin">
            <SubInputNativeRadio>
              限時專送 NT$ 0 / 期
            </SubInputNativeRadio>
          </div>
          <div class="form-wrapper__block form-wrapper__block--more-margin">
            <SubInputNativeRadio>
              限時掛號 NT$ 20 / 期
            </SubInputNativeRadio>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              電子發票
            </h1>
          </header>
          <div class="form-wrapper__block">
            <p class="form-wrapper__paragraph">
              發票將於完成訂購後 7 個工作天內寄達。
            </p>
          </div>
          <div class="form-wrapper__block form-wrapper__block--more-margin">
            <SubInputLovecode />
          </div>
          <div class="form-wrapper__block form-wrapper__block--more-margin">
            <SubInputInvoiceDuplicate />
          </div>
          <div class="form-wrapper__block form-wrapper__block--more-margin">
            <SubInputInvoiceTriplicate />
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <div class="form-wrapper__block">
            <SubInputNativeCheckbox>
              我已閱讀並同意：
            </SubInputNativeCheckbox>
          </div>
          <div class="form-wrapper__block">
            <p class="form-wrapper__paragraph form-wrapper__paragraph--indent">
              鏡週刊於行銷目的範圍內得永久彙集。處理及利用本人填寫之訂單資料，並得利用前述資料而為本公司在台灣地區對本人發送活動、服務訊息。本公司對所彙集資料依法保密。本人如有請求停止彙集、處理、利用之需要可書面或致電訂戶組處理 (02) 6636-6800。
            </p>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header class="form-wrapper__form-header form-header">
            <h1 class="form-header__title">
              信用卡
            </h1>
          </header>
          <div class="form-wrapper__block">
            <label class="form-wrapper__label">
              卡號
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
                placeholder="0000 0000 0000 0000"
              />
            </label>
          </div>
          <div class="form-wrapper__block form-wrapper__block--row-mobile">
            <label class="form-wrapper__label">
              有效期限
              <SubInput
                class="form-wrapper__input form-wrapper__input--xs"
                placeholder="MM / YY"
              />
            </label>
            <label class="form-wrapper__label">
              卡片後三碼
              <SubInput
                class="form-wrapper__input form-wrapper__input--xs"
                placeholder="CVV"
              />
            </label>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <SubButtonSubmit
            class="button button--submit"
          >
            確認訂購
          </SubButtonSubmit>
        </section>
      </main>
      <aside
        :class="[
          'section__aside',
          { 'section__aside--fixed': shouldAsideFixed },
          'aside'
        ]"
      >
        <SubTablePriceTotal
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
        <SubDiscountHint
          class="aside__item"
          :title="'符合一年方案優惠'"
          :caption="'贈送 5 期'"
        />
        <SubDiscountHint
          class="aside__item"
          :title="'符合續訂優惠'"
          :caption="'贈送 1 期'"
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
import SubButtonSubmit from 'src/components/subscribe/SubButtonSubmit.vue'
import SubTablePriceTotal from 'src/components/subscribe/SubTablePriceTotal.vue'
import SubDiscountHint from 'src/components/subscribe/SubDiscountHint.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

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
    SubButtonSubmit,
    SubTablePriceTotal,
    SubDiscountHint,
    SubFooter
  },
  mixins: [ mixinFixedAside ],
  methods: {
    backToSubscribePlans() {
      this.$router.push('/subscribe-plans')
    }
  }
}
</script>

<style lang="stylus" scoped>
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
  &__form-wrapper
    & + &
      margin 42px 0 0 0

.aside
  width 400px
  &__item
    & + &
      margin 10px 0 0 0

.form-wrapper
  &__form-header
    & + .form-wrapper__block
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

  .form-wrapper
    &__block
      flex-direction column
      align-items flex-start
      &--row-mobile
        flex-direction row
        .form-wrapper__label + .form-wrapper__label
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
