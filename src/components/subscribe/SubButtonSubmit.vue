<template>
  <button class="submit">
    <slot />
  </button>
</template>

<style lang="stylus" scoped>
.submit
  height 56px
  border-radius 4px
  background-color #1b7aae
  font-size 18px
  color #ffffff
  display flex
  justify-content center
  align-items center
</style>
