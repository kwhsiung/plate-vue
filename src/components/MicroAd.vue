<template>
  <div
    :id="`compass-fit-${id}`"
    :sessionId="sessionId"
  />
</template>
<script>
import { adtracker } from 'src/util/adtracking'
import { insertMicroAd } from '../util/comm'
import uuidv4 from 'uuid/v4'
const debug = require('debug')('CLIENT:MICROAD')
export default {
  name: 'MicroAd',
  props: ['id', 'currEnv', 'currUrl'],
  data () {
    return {
      microAdLoded: false,
      sessionId: uuidv4()
    }
  },
  watch: {
    currUrl () {
      this.microAdLoded = false
      insertMicroAd({ adId: this.id, currEnv: this.currEnv, vm: this })
    },
    microAdLoded () {
      debug('this.microAdLoded', this.microAdLoded)
      this.microAdLoded && adtracker({
        el: this.$el,
        slot: `compass-fit-${this.id}`,
        position: this.id,
        isAdEmpty: false,
        sessionId: this.sessionId
      })
    }
  },
  mounted () {
    this.runMicroAd()
  },
  methods: {
    runMicroAd () {
      insertMicroAd({ adId: this.id, currEnv: this.currEnv, vm: this })
      return true
    }
  }
}
</script>
<style lang="stylus">

.nativeDFP.latest-list_item
  vertical-align top
  margin-bottom 15px
  display flex
  border-bottom 1px solid rgba(0, 0, 0, 0.28)
  padding-bottom 15px
  width 100%
  a
    position relative
    display block
    flex 1
    .latest-list_item_img
      background-repeat no-repeat
      background-size cover
      background-position center center
      padding-top 100%
      &[lazy=loading]
        background-size 40%
    .latest-list_item_label
      position absolute
      height 25px
      white-space nowrap
      padding 0 10px
      background-color #000
      top -25px
      color #fff
      font-size 0.9rem
      display flex
      justify-content center
      align-items center
  .latest-list_item_title
    background-color #fff
    border-top-width 0
    line-height 1.4rem
    font-size 1rem
    display flex
    justify-content center
    align-items flex-start
    min-height 60px
    padding-top 0
    flex 1
    flex-direction column
    padding-left 20px
    a
      width 100%
      max-height 100%
      h3
        height calc(1.7rem * 3)
        font-size 1.2rem
        font-weight 300
        line-height 1.7rem
        overflow hidden

      &:hover, &:link, &:visited
        color #8c8c8c
        font-weight normal
        border none
    .latest-list_item_label
      height 35px
      white-space nowrap
      padding 0 10px
      background-color #000
      color #fff
      font-size 1.2rem
      display flex
      justify-content center
      align-items center
  .tablet-only
    display none !important

.pop_item
  #compass-fit-widget-content
    figure
      position relative
      width 100%
      padding-top 66.66%
      margin 0
      overflow hidden
      img
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        width 100%
        height 100%
        object-fit cover
        object-position 50% 50%
    .pop_item--colorBlock
      display flex
      justify-content center
      align-items center
      position absolute
      left 0
      bottom 0
      height 25px
      color #fff
      font-size 0.9rem
      letter-spacing 1px
      white-space nowrap
      padding 0 10px
    .pop_item_title
      background-color #fff
      border-top-width 0
      line-height 1.5rem
      font-size 1.1rem
      display flex
      justify-content center
      align-items flex-start
      a
        width 100%
        max-height 100%
        margin 10px 0
        padding 0 0 0 10px
        &:hover, &:link, &:visited
          color rgba(0, 0, 0, 0.49)
          font-weight normal
          border none

@media (max-width: 320px)
  .nativeDFP.latest-list_item
    .latest-list_item_title
      a
        h3
          margin .5em 0
          font-size 1rem

@media (min-width: 600px)
  .nativeDFP.latest-list_item
    a
      .latest-list_item_img
        padding-top 60%
      .latest-list_item_label
        top 0
        right -60px
        height 60px
        font-size 1.2rem
    .latest-list_item_title
      flex 1.5
      padding-left 80px
      font-weight 300
      a
        h3
          height auto
          margin 0 0 10px
          font-size 1.3rem
    .tablet-only
      display block !important
      &.latest-list_item_label
        display flex !important
    .tablet-hidden
      display none !important

@media (min-width: 1200px)
  .nativeDFP.latest-list_item
    display block
    .desktop-hidden
      display none !important
    a
      .latest-list_item_label
        height 25px
        white-space normal
        padding 0 10px
        top auto
        bottom 0
        left 0
        right auto
        font-size 0.9rem
    .latest-list_item_title
      padding-left 0
      padding-top 5px
      > a
        h3
          font-size 1rem
          font-weight 300
@media (min-width 0px) and (max-width 499px)
  .pop_item
    #compass-fit-widget-content
      .pop_item_title
        font-size 1.2rem
        line-height 1.5rem
</style>
