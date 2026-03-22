<template>
  <input class="input" 
  :type="type" 
  :name="name"
  :value="inputValue"
  @input="onInput"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: String,
    name: String,
    inputValue: String
  },
  emits: ['valueId'],
  methods: {
    onInput(event){
      this.$emit('valueId', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%; 
  height: 45px;
  padding: 0 15px;
  font-size: 1rem;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  outline: none;
}
</style>