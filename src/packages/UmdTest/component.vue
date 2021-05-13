<template>
  <div class="umd-test">UMD Test: {{msg}}</div>
</template>

<script>
export default {
  name: "UmdTest",
  props: {
    msg: {
      type: [Boolean, String, Number],
      default: 'Hello, world!'
    }
  }
}
</script>

<style scoped>
.umd-test {
  color: red;
  text-shadow: 0 0 10px yellow;
}
</style>
