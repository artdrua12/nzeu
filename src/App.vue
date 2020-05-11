<template>
  <div id="app">
    <div class="app-service app-service_dark">
      <Card v-for="i in 5" :key="i"></Card>
    </div>
    <div class="app-enter"></div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-columns:minmax(230px, 1300px);
  grid-template-rows: max-content 1fr;
  background-color: wheat;
  justify-content: center;
}
.app-service {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  border-radius: 10px;
}
.app-service_dark {
  background-color: #07273c;
}
@media (max-width: 1290px) {
  #app {
  grid-template-columns:minmax(230px, 720px);
}
}
</style>
