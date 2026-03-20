<template>
  <nav>
    <h1 class="brand" style="font-size: var(--font-size-md)">
      Universidade da Amazônia 
    </h1>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to" :class="classLinks(link)">{{ link.nome }}</router-link>
      </li>
    </ul>
    <ul class="login">
      <li v-for="(link, index) in loginLink" :key="index">
        <router-link :to="link.to" :class="classLinks(link)">{{ link.nome }}</router-link>
      </li>
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
          nome: 'Página Inicial',
          to: { name: 'home' },
          type: 'web'
        },
        {
          nome: 'Serviços',
          to: { name: 'services' },
          type: 'web'
        },
        {
          nome: 'Links úteis',
          to: { name: 'utilities' },
          type: 'web'
        },
        {
          nome: 'Instruções',
          to: { name: 'instructions' },
          type: 'web'
        },
      ],
      loginLink: [
        {
          nome: 'Entrar',
          to: { name: 'login' },
          typeLogin: 'login'
        },
        {
          nome: 'Registrar',
          to: { name: 'register' },
          typeLogin: 'register'
        },
      ],
    }
  },
  methods: {
    classLinks(link){
      return [
        'link',
        link.type === 'web' ? 'web-link' : '',
        link.typeLogin === 'login' ? 'login-link' : '',
        link.typeLogin === 'register' ? 'register-link' : '',
      ]
    }
  }
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 70px;
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
.link{
  display: inline-block;
  text-decoration: none;
  transition: var(--transition-base);
  padding: var(--padding-md);
  color: var(--text-color-dark);
}
.web-link:hover{
  transform: var(--transform-hover);
  background-color: var(--primary-color);
  color: var(--text-color-light);
}
.login-link:hover{
  transform: var(--transform-hover);
}
.register-link{
  background-color: var(--primary-color);
  color: var(--text-color-light);
}
.register-link:hover{
  background-color: #ffffff00;
  color: var(--text-color-dark);
  transform: var(--transform-hover);
}


</style>