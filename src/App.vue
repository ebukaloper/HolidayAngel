<template>
  <div id="app">
      <Landing />
  </div>
</template>

<script>
import Landing from './app/landing/index.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>


<style lang="scss">
  @import "../styles/global.scss";
</style>


