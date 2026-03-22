<template>
  <div class="container">
      <div v-for="(guidence, index) in guidelines" :key="index">
      <BaseActivities :data="null" >
        <template v-slot:act>{{guidence.titulo}}</template>
        <template v-slot:details>{{guidence.texto}}</template>
      </BaseActivities>
    </div> 
  </div>
</template>

<script>
import BaseActivities from '@/components/common/BaseActivities.vue';

export default {
  name: 'InstructionsView',
  components: {
    BaseActivities
  },
  data(){
    return {
       guidelines : [
        {
          titulo: 'Acompanhe seus prazos',
          texto: 'Verifique semanalmente as datas de entrega das atividades, provas e trabalhos para evitar atrasos.'
        },
        {
          titulo: 'Mantenha uma rotina de estudos',
          texto: 'Organize horários fixos durante a semana para revisar conteúdos, assistir aulas e realizar exercícios.'
        },
        {
          titulo: 'Leia os enunciados com atenção',
          texto: 'Antes de iniciar qualquer atividade, confira todos os detalhes solicitados pelo professor para evitar erros.'
        },
        {
          titulo: 'Salve seus arquivos com cuidado',
          texto: 'Mantenha cópias dos trabalhos em nuvem, pendrive ou no computador para não correr o risco de perder arquivos.'
        },
        {
          titulo: 'Acompanhe os avisos da faculdade',
          texto: 'Consulte frequentemente comunicados, mensagens e alterações no calendário acadêmico.'
        },
        {
          titulo: 'Evite deixar tudo para a última hora',
          texto: 'Começar tarefas com antecedência ajuda a reduzir erros, estresse e atrasos nas entregas.'
        }
      ]
    }
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>