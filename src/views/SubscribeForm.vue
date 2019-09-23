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
          <header>
            <h1>
              訂購項目
            </h1>
            <button @click="backToSubscribePlans">
              修改
            </button>
          </header>
          <div>
            <SubTableCart />
          </div>
          <div>
            <SubInputCoupon />
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header>
            <h1>
              訂購人
            </h1>
          </header>
          <div>
            <label>
              姓名
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
          </div>
          <div>
            <label>
              手機
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
            <label>
              市話（非必填）
              <div>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--s"
                />
                <span>-</span>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--xs"
                  placeholder="EXT"
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              通訊地址
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
          <div>
            <label>
              電子信箱
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
        </section>
        <section class="main__form-wrapper form-wrapper">
          <header>
            <h1>
              收件人
            </h1>
          </header>
          <div>
            <label>
              姓名
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
          </div>
          <div>
            <label>
              手機
              <SubInput
                class="form-wrapper__input form-wrapper__input--m"
              />
            </label>
            <label>
              市話（非必填）
              <div>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--s"
                />
                <span>-</span>
                <SubInput
                  class="form-wrapper__input form-wrapper__input--xs"
                  placeholder="EXT"
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              通訊地址
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
          <div>
            <label>
              電子信箱
              <SubInput
                class="form-wrapper__input form-wrapper__input--l"
              />
            </label>
          </div>
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
import SubInputRadio from 'src/components/subscribe/SubInputRadio.vue'
import SubInputCoupon from 'src/components/subscribe/SubInputCoupon.vue'
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
    SubInputRadio,
    SubInputCoupon,
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
  header
    display flex
    justify-content space-between
    align-items center
  h1
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a
  button
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
  div
    margin 20px 0 0 0
    display flex
    align-items center
  label
    display flex
    flex-direction column
    width 100%
    div
      margin 0
      span
        margin 0 4px
  label + label
    margin 0 0 0 30px
  &__input
    margin 6px 0 0 0
    &--xs
      width 72px
    &--s
      width 180px
    &--m
      width 250px
    &--l
      width 100%
</style>
