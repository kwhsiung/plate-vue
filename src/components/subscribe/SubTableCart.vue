<template>
  <table>
    <thead>
      <tr>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>一年 52 期，加贈 5 期方案</td>
        <td>1</td>
        <td>NT$ 2,880</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="stylus" scoped>
table
  width 100%
  border-collapse collapse
  color #4a4a4a

thead
  border-bottom 1px solid #4a4a4a
  font-size 15px

tbody
  font-size 18px

th, td
  font-weight normal
  padding 14px 0
  text-align right
  &:first-child
    text-align left

th
  padding 0 0 14px 0

@media (max-width 768px)
  tbody
    font-size 15px

  th, td
    text-align left
    &:nth-child(2)
      text-align right
      min-width 50px
    &:nth-child(3)
      text-align right
      min-width 100px

  tbody
    td
      &:nth-child(1)
        line-height 1.5
</style>
