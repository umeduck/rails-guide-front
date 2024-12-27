<template>
  <div id="app">
    <router-view />
    <ApiTest></ApiTest>
  </div>
</template>

<script>
import ApiTest from './components/ApiTest.vue';

export default {
  name: 'App',
  components: {
    ApiTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
