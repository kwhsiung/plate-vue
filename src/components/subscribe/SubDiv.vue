<template>
  <div>
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
div
  border-radius 4px
  background-color #f5f5f5
  padding 22px 25px

@media (max-width 768px)
  div
    padding 22px 18px
</style>
