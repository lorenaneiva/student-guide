<template>
  <TheNavbar/>
  <div class="view"><router-view/></div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';


export default {
  name: 'App',
  components: {
    TheNavbar
  },
}
</script>

<style>

.view {
  width: 100%;
}

</style>
