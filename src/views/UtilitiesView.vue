<template>
  <div class="utilities">
    <div class="card-container">

        <BaseCard :link="link.link " v-for="(link,index) in links" :key="index" :text="link.nome">
          <template v-slot:title>
              {{ link.nome }}
          </template>
          <template v-slot:paragraph>
            {{ link.paragraph }}
          </template>
        </BaseCard>

    </div>
  </div>
</template>

<script>
import BaseCard from '../components/common/BaseCard.vue';

export default {
  name: 'UtilitiesView',
  components: {
    BaseCard    
  }, data() {
    return {
      links: [
        {
          nome: 'Nucleo Trabalhabilidade',
          link: 'https://conheca.sereducacional.com/nucleodecarreiras',
          paragraph: "Trabalhabilidade é o novo jeito de se posicionar no mercado de trabalho, com uma perspectiva colaborativa. Esse conceito impulsiona o profissional a ser mais ousado no desenvolvimento de suas habilidades e competências. Desse modo, ele vai além das funções básicas, dando lugar à inovação e ao espírito empreendedor."
        }, 
        {
          nome: 'Unama Blogs',
          link: 'https://blogs.unama.br/',
          paragraph: 'O Blog da UNAMA é uma plataforma digital da Universidade da Amazônia voltada para o desenvolvimento acadêmico e profissional. Ele reúne informações sobre carreiras, empregabilidade, cursos e empreendedorismo, funcionando como um canal de comunicação que integra ensino, pesquisa e extensão para alunos e a comunidade.'
        }
      ]
    }
  },
}
</script>

<style scoped>

.utilities{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg);
}

.background-img, .card-container{
  width: 65%;
}
.card-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  padding: 10vh;
  width: 70vw;
  height: 70vh;
}
.card-container::before{
  content: '';
  background-image: url("../../public/utilities-study-friends.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100vw;
  height: 100vh;
  filter: blur(1px) brightness(70%);
  
  z-index: -1;
}

</style>