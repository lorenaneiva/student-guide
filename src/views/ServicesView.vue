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
  </div>
</template>

<script>
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

      ],
      alert: false,
      selectedType: null
    }
  },
  components: {
    BaseAlert,
    BaseButtonNoLink
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
      if(this.alert){
        this.alert = false
      }
      this.alert = true
      this.selectedType = 'warning'
    },
    onAl(){
      if(this.alert){
        this.alert = false
      }
      this.alert = true
      this.selectedType = 'alert'
    },
    onInf(){
      if(this.alert){
        this.alert = false
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