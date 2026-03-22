<template>
  <div class="container">
    <div class="warning-container">
      <BaseButtonNoLink text="Recados" @appear="onWar()"/>
      <BaseButtonNoLink text="Alertas" @appear="onAl()"/>
      <BaseButtonNoLink text="Informações" @appear="onInf()"/>
    </div>
    <div v-for="(warning, index) in filteredWarnings" :key="index">
      <BaseAlert 
      v-if="alert" 
      :title="warning.title" 
      :message="warning.message" 
      :type="warning.type" 
      />
    </div> 
    <div v-for="(activity, index) in activities" :key="index">
      <BaseActivities :data="activity.dataEntrega">
      <template v-slot:course>{{activity.curso}}</template>
      <template v-slot:act>{{activity.atividade}}</template>
      <template v-slot:details>{{activity.detalhes}}</template>
      </BaseActivities>
    </div> 
  </div>
</template>

<script>
import BaseActivities from '@/components/common/BaseActivities.vue';
import BaseAlert from '@/components/common/BaseAlert.vue';
import BaseButtonNoLink from '@/components/common/BaseButtonNoLink.vue';

export default {
  name: 'ServicesView',
  data() {
    return {
      warnings: [
        {
          title: 'Prazo de matrícula',
          message: 'Fique atento ao período de matrícula e rematrícula para não correr o risco de perder disciplinas no semestre.',
          type: 'warning'
        },
        {
          title: 'Entrega de atividades',
          message: 'Verifique regularmente os prazos de trabalhos, fóruns e avaliações no ambiente virtual da faculdade.',
          type: 'alert'
        },
        {
          title: 'Documentação pendente',
          message: 'Confira se todos os seus documentos acadêmicos e financeiros foram enviados e aprovados pela instituição.',
          type: 'info'
        },
        {
          title: 'Pagamento de mensalidade',
          message: 'Acompanhe o vencimento das mensalidades para evitar juros, bloqueios ou dificuldades no acesso aos serviços.',
          type: 'warning'
        },
        {
          title: 'Calendário acadêmico',
          message: 'Consulte o calendário acadêmico para acompanhar feriados, semanas de prova, recessos e datas importantes.',
          type: 'info'
        }
      ],
      activities: [
          {
            curso: 'Lógica de Programação',
            atividade: 'Lista de Exercícios 01',
            detalhes: 'Resolver 10 questões sobre variáveis, operadores e estruturas condicionais.',
            dataEntrega: '2026-03-25'
          },
          {
            curso: 'Matemática Aplicada',
            atividade: 'Trabalho sobre Matrizes',
            detalhes: 'Montar um resumo com exemplos práticos de adição, multiplicação e determinantes.',
            dataEntrega: '2026-03-27'
          },
          {
            curso: 'Interação Humano-Computador',
            atividade: 'Análise de Interface',
            detalhes: 'Escolher um aplicativo e avaliar usabilidade, acessibilidade e experiência do usuário.',
            dataEntrega: '2026-03-29'
          },
          {
            curso: 'Sistemas Computacionais',
            atividade: 'Pesquisa sobre Memória RAM',
            detalhes: 'Explicar função, tipos e importância da memória RAM no desempenho do sistema.',
            dataEntrega: '2026-03-30'
          },
          {
            curso: 'Gestão de Times',
            atividade: 'Estudo de Caso',
            detalhes: 'Analisar um caso de liderança e propor melhorias na comunicação da equipe.',
            dataEntrega: '2026-04-02'
          }
      ],
      alert: false,
      selectedType: null
    }
  },
  components: {
    BaseAlert,
    BaseButtonNoLink,
    BaseActivities
  },
  computed: {
    filteredWarnings(){
      if (!this.selectedType){
        return this.warnings
      }
      return this.warnings.filter(item => item.type === this.selectedType)
    }
  },
  methods: {
    onWar(){
      if(this.alert && this.selectedType == 'warning'){
        return this.alert = false
      }
      this.alert = true
      this.selectedType = 'warning'
    },
    onAl(){
      if(this.alert && this.selectedType == 'alert'){
        return this.alert = false
      }
      this.alert = true
      this.selectedType = 'alert'
    },
    onInf(){
      if(this.alert && this.selectedType == 'info'){
        return this.alert = false
      }
      this.alert = true
      this.selectedType = 'info'
    },
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.warning-container{
  display: flex;
  gap: 5px;
}
</style>