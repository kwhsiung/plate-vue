<template>
  <label class="radio-container">
    <slot />
    <input
      type="radio"
      v-bind="{
        ...$attrs,
        value: radioValue
      }"
      v-on="{
        ...$listeners,
        input: handleInput
      }"
    >
    <span class="checkmark" />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    radioValue: {
      type: null
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
/* Customize the label (the container) */
.radio-container {
  display: flex;
  flex-direction row !important
  align-items center
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  color #4a4a4a
  height 22px
}

/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0px;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #f5f5f5;
  border-radius: 50%;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .checkmark {
  background-color: #dcdcdc;
}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .checkmark {
  background-color: #f5f5f5;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .checkmark:after {
  top: 6px;
  left: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #064f77;
}
</style>
