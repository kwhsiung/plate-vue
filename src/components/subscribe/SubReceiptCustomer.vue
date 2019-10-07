<template>
  <div class="receipt-customer">
    <h1 class="receipt-customer__title">
      顧客資訊
    </h1>
    <div>
      <h2 class="receipt-customer__subtitle">
        訂購人
      </h2>
      <table class="receipt-customer__table table">
        <tbody>
          <tr>
            <td>
              姓名
            </td>
            <td>
              陳阿好
            </td>
          </tr>
          <tr>
            <td>
              電子信箱
            </td>
            <td>google@google.com</td>
          </tr>
          <tr>
            <td>
              聯絡電話
            </td>
            <td>
              0919 919 919
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2 class="receipt-customer__subtitle">
        收件人
      </h2>
      <table class="receipt-customer__table table">
        <tbody>
          <tr>
            <td>
              姓名
            </td>
            <td>
              陳阿好
            </td>
          </tr>
          <tr>
            <td>
              聯絡電話
            </td>
            <td>
              0919 919 919
            </td>
          </tr>
          <tr>
            <td>
              通訊地址
            </td>
            <td>
              208 新北市金山區金包里街 9 號
            </td>
          </tr>
          <tr>
            <td>
              派送備註
            </td>
            <td>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.receipt-customer
  &__title
    margin 0
    font-size 26px
    font-weight normal
    color #4a4a4a
  &__subtitle 
    margin 23px 0 0 0
    font-size 18px
    font-weight normal
    color #4a4a4a
  &__table
    margin 9px 0 0 0

.table
  border-collapse collapse
  td
    vertical-align top
    color #4a4a4a
    font-size 15px
    padding 9px 0
  td:first-child
    min-width 145px
  td:nth-child(2)
    width 100%

@media (max-width 768px)
  .receipt-customer
    &__title
      font-size 22px
    &__subtitle
      margin 18px 0 0 0

  .table
    td
      padding 6px 0
    td:first-child
      min-width 100px
</style>
