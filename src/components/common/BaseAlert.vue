<template>
  <div :class="baseClass">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseAlert',
  props: [
    'type',
    'title',
    'message'
  ],
  computed: {
    baseClass(){
      return [
        'base',
        this.type
      ]
    }
  },
}
</script>

<style scoped>
.base{
  text-align: center;
  padding: var(--padding-md);
  margin: var(--margin-md);
  border-radius: 12px;
  border: 1px solid transparent;
  border-left: 6px solid transparent;
  color: #243b53;
  text-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 50vw;
}

.warning{
  background-color: #F3E4B6;
  border-color: #D4A73A;
  border-left-color: #B8860B;
  color: #5F4300;
}

.alert{
  background-color: #EBC9C9;
  border-color: #D07A7A;
  border-left-color: #B33A3A;
  color: #6E1F1F;
}

.info{
  background-color: #C9D8E8;
  border-color: #8FAEC9;
  border-left-color: #5F84A8;
  color: #1F3F5B;
}

</style>