<template>
  <div class="sub-div">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
.sub-div
  border-radius 4px
  background-color #f5f5f5
  padding 22px 25px

@media (max-width 768px)
  .sub-div
    padding 22px 18px
</style>
