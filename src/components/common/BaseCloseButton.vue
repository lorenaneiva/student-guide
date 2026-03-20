<template>
    <button class="close" @click="onClick">X</button>
</template>

<script>
export default {
  name:'BaseCloseButton',
  methods: {
    onClick(){
      this.$emit('close')
    }
  },
}
</script>

<style>
.close{
  background-color: var(--dark-color);
  border: 0;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  color: var(--light-color);
}
</style>