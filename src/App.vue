<template>
  <div id="app">
    <div>Vue App</div>
    <UmdTest msg="OK"/>
    <comone :sdata="{color: 'red', fontSize: 30, desc: 'adds111'}"></comone>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
