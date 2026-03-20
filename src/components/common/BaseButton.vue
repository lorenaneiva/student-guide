<template>
  <div>
    <button class="btn">
      <a :href="link" target="_blank" class="link">
        {{ text }}
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: [
    'text',
    'link'
  ]
}
</script>

<style scoped>
.btn {
  border: 0;

}

.link{
  background-color: var(--primary-color);
  color: var(--text-color-light);
  text-decoration: none;
  padding: var(--padding-md);
  display: inline-block;
  text-decoration: none;
  transition: var(--transition-base);
  padding: var(--padding-md);
  width: 120px;
}
.link:hover{
  color: var(--text-color-dark);
  background-color: #ffffff00;
  transform: var(--transform-hover);
  cursor: pointer;
}
</style>