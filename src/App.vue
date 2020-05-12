<template>
  <div id="app">
    <header-comp class="app-header"></header-comp>
    <card class="app-card "></card>
    <enter class="app-enter app_center "></enter>
    <footer-comp class="app-footer app_center"></footer-comp>
  </div>
</template>

<script>
import headerComp from "./components/Header";
import card from "./components/Card";
import enter from "./components/Enter";
import footerComp from "./components/Footer"

export default {
  name: "App",
  components: {
    headerComp,
    card,
    enter,
    footerComp
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

  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1300px) 1fr;
  grid-template-rows: 250px auto auto auto 1fr;
  grid-row-gap: 10px;
  background: url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat,
    url(https://mdoc.nces.by/img/pattern_city.png) 0 100% repeat-x;
      min-height: 100vh;
}

.app-header {
  grid-area: 1/1/3/-1;
}

.app-card {
  grid-area: 2/2/4/3;
}
.app_center {
  grid-column: -2/2;
}

.app-footer {
  /* background-image: url(https://mdoc.nces.by/img/pattern_city.png); */
  background-repeat: repeat-х;
  height: 176px;
}

@media (max-width: 1290px) {
  #app {
    grid-template-columns: 1fr minmax(230px, 720px) 1fr;
  }
}
/* глобальные стили */
.button_black {
  border-radius: 10px;
  margin-top: 5px;
  outline: none;
  margin-bottom: 15px;
  background-color: #41535f;
  border: 1px solid #41535f;
  border-bottom: 4px solid #010e16;
  color: #fff;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
}
.button_black:hover {
  background-color: #7ea232;
}
</style>
