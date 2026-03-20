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
  background-color: white;
  padding: var(--padding-lg);
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
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
