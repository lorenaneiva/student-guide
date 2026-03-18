<template>
  <div class="app">
    <TheNavbar/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';


export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>

.app{
  background-color: aquamarine;
}
</style>