<template>
  <div id="app">
    <Header class="app-header"></Header>
    <Card class="app-service"></Card>
    <div class="app-enter"></div>
    <div class="app-footer"></div>
  </div>
</template>

<script>
import Card from "./components/Card";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Card
  }
};
</script>

<style>
body {
  margin: 0px;
  background: url(https://mdoc.nces.by/img/bg.png) repeat-x;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(230px, 1300px);
  grid-template-rows: auto auto 1fr;
  justify-content: center;
  background: url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat,
    url(https://mdoc.nces.by/img/pattern_city.png) 0 100% repeat-x;
}
.app-footer {
  /* background-image: url(https://mdoc.nces.by/img/pattern_city.png); */
  background-repeat: repeat-х;
  height: 176px;
}

@media (max-width: 1290px) {
  #app {
    grid-template-columns: minmax(230px, 720px);
  }
}
</style>
