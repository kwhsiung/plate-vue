<template>
  <section class="sub">
    <SubHeader
      class="sub__header"
      :active-state-index="2"
    />
    <section class="sub__section section">
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
            <SubInput />
            <SubInputRadio />
          </div>
        </section>
      </main>
      <aside class="section__aside aside">
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
import SubTablePriceTotal from 'src/components/subscribe/SubTablePriceTotal.vue'
import SubDiscountHint from 'src/components/subscribe/SubDiscountHint.vue'
import SubFooter from 'src/components/subscribe/SubFooter.vue'

export default {
  components: {
    SubHeader,
    SubTableCart,
    SubInput,
    SubInputRadio,
    SubTablePriceTotal,
    SubDiscountHint,
    SubFooter
  },
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

.main
  flex 1 1 auto

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
</style>
