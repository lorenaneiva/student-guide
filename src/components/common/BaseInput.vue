<template>
  <input :type="type" :name="name" class="input" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: String,
    name: String
  }
}
</script>

<style scoped>
.input {
  width: 100%; /* ESSENCIAL */
  height: 45px;
  padding: 0 15px;
  font-size: 1rem;

  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  outline: none;
}
</style>