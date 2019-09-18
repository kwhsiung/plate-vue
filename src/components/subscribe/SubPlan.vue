<template>
  <div class="sub-plan">
    <div class="sub-plan__title title">
      <h1 v-text="currentPlan.title" />
    </div>
    <div class="sub-plan__content content">
      <p v-text="currentPlan.description" />
      <SubPlanPrice
        class="content__sub-plan-price"
        :price-original="currentPlan.priceOriginal"
        :price-on-sale="currentPlan.priceOnSale"
      />
    </div>
    <nav>
      <button @click="$emit('buttonClick')">
        訂購{{ currentPlan.title }}
      </button>
    </nav>
  </div>
</template>

<script>
import SubPlanPrice from './SubPlanPrice.vue'

export default {
  props: {
    yearDuartion: {
      type: Number,
      required: true,
      validator(value) {
        return [ 1, 2 ].includes(value)
      }
    }
  },
  components: {
    SubPlanPrice
  },
  data() {
    return {
      plans: [
        {
          title: '一年方案',
          description: '訂購一年鏡週刊 52 期，加贈 5 期',
          priceOriginal: 3990,
          priceOnSale: 2880
        },
        {
          title: '二年方案',
          description: '訂購二年鏡週刊 104 期，加贈 10 期',
          priceOriginal: 7800,
          priceOnSale: 5280
        }
      ]
    }
  },
  computed: {
    currentPlan() {
      return this.plans[this.yearDuartion - 1]
    }
  }
}
</script>

<style lang="stylus" scoped>
.sub-plan
  width 480px
  height 380px
  border-radius 4px
  background-color #f5f5f5
  padding 20px 20px 40px 20px
  position relative
  &__content
    margin 18px 0 0 0

.title
  padding 0 0 17px 0
  text-align center
  border-bottom 1px solid #4a4a4a
  h1
    margin 0
    font-size 32px
    font-weight normal
    color #4a4a4a

.content
  text-align center
  font-size 26px
  color #4a4a4a
  p
    margin 0
  &__sub-plan-price
    margin 42px 0 0 0

nav
  display flex
  justify-content center
  align-items center
  position absolute
  bottom 40px
  width calc(100% - 20px - 20px)
  button
    width 340px
    height 56px
    border-radius 4px
    background-color #1b7aae
    font-size 18px
    color #ffffff
    display flex
    justify-content center
    align-items center

@media (max-width 768px)
  .sub-plan
    width 100%
    height auto
    padding 20px 10px
    &__content
      margin 22px 0 0 0

  .title
    padding 0 0 14px 0
    h1
      font-size 26px

  .content
    font-size 18px
    p
      line-height 1.5
    &__sub-plan-price
      margin 20px 0 0 0

  nav
    margin 17px 0 0 0
    position static
    width 100%
    button
      width 100%
      height 50px
</style>
