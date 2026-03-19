<template>
  <main class="container"> 
    <img src="../../public/university.jpg" alt="imagem de funo" class="background-img">
    <div class="content">
      <h1 class="title">Encontre seu <mark class="destaque-container">futuro</mark> hoje!</h1>
      <p class="desc">A melhor universidade privada do Pará</p>
    </div>
  </main>
</template>
<script>
export default {
  name: 'WelcomePage'
}
</script>

<style scoped>
.background-img{
  width: 90%;
  position: fixed;
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(60%);
}
.container{
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.content{
  display: flex;
  flex-direction: column;
  margin-top: 20vh; 
  text-align: center;
}
.title, .desc {
   color: white;
   text-shadow: 0 5px 10px rgba(0, 0, 0, 0.30);
} 
.title{
  font-size: 3rem;
}
.desc{
  font-size: 2rem;
}

.destaque-container{
  padding-left: 5px;
  padding-right:5px;
  color: white;
  background-color: #427443;
  text-shadow: none;
}

</style>