<template>
  <nav>
    <p class="brand">
      Universidade da Amazônia 
    </p>
    <ul>
      <li :class="linkStyle" v-for="(link, index) in links" :key="index">
          {{ link.nome }}
      </li>
    </ul>
    <ul class="login">
      <li><a href="">Entrar</a></li>
      <li><a href="">Registrar</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'TheNavbar',
  data() {
    return {
      links: [
        {
          nome: 'Página Inicial'
        },
        {
          nome: 'Serviços'
        },
        {
          nome: 'Links úteis'
        },
        {
          nome: 'Instruções'
        },
      ]
    }
  },
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 10vh;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
ul{
  display: flex;
  list-style: none;
  justify-content: end;
}
li{
  padding: 20px;
  margin: 10px;
}
</style>