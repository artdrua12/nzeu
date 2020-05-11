<template>
  <div id="app">
    <Header class="app-header"></Header>
    <Card class="app-service app-service_center"></Card>
    <div class="app-enter app-service_center"></div>
    <div class="app-footer app-service_center"></div>
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
  grid-template-columns: 1fr minmax(1200px, 1300px) 1fr;
  grid-template-rows: auto auto auto 1fr;
  background: url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat,
    url(https://mdoc.nces.by/img/pattern_city.png) 0 100% repeat-x;
}

.app-header {
  grid-column: 1/-1;
}
.app-footer {
  /* background-image: url(https://mdoc.nces.by/img/pattern_city.png); */
  background-repeat: repeat-х;
  height: 176px;
}
.app-service_center {
  grid-column: 2/3;
}

@media (max-width: 1290px) {
  #app {
    grid-template-columns:1fr minmax(230px, 720px) 1fr;
  }
}
</style>
