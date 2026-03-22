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
  provide(){
    return {
      users: [
        {
          id: 1,
          first_name: 'Lorena',
          last_name: 'Neiva'
        },
        {
          id: 2,
          first_name: 'Eduarda',
          last_name: 'Ribeiro'
        },
        {
          id: 3,
          first_name: 'Pedro',
          last_name: 'Damasceno'
        },
        {
          id: 4,
          first_name: 'Camila',
          last_name: 'Costa'
        },
        {
          id: 5,
          first_name: 'Leticia',
          last_name: 'Rocha'
        },
      ],
      user: null
    }
  }
}
</script>

<style>

.view {
  width: 100%;
}

</style>
