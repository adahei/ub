<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};

</script>

<style lang="scss">
html, body, #app, .app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
