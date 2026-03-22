<template>
  <div class="card">
    <h2 class="title">
        <slot name="title"/>
    </h2>
    <p class="paragraph">
      <slot name="paragraph"/>
    </p>
    <BaseButton :text="text" :link="link"/>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default{
  name:'BaseCard',
  components: {
    BaseButton
  },
  props: [
    'link',
    'text'
  ]
}
</script>

<style scoped>
.card{
  width: 100%;
  max-width: 460px;
  padding: 34px 30px;
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
}
.title{
  margin: var(--margin-md);
  text-transform: uppercase;
  font-size: 1.2rem;
}
.paragraph{
  margin: var(--margin-md);
  font-size: 1rem;
}

</style>
