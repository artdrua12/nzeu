<template>
  <div id="app">
    <header-comp class="app-header"></header-comp>
    <card class="app-card"></card>
    <router-view class="app-enter app_center"></router-view>
    <before-footer class="app-fullWidth"></before-footer>
    <footer-comp class="app-fullWidth"></footer-comp>
  </div>
</template>

<script>
import headerComp from "./components/Header";
import card from "./components/Card";
import beforeFooter from "./components/BeforeFooter";
import footerComp from "./components/Footer";

export default {
  name: "App",
  components: {
    headerComp,
    card,
    beforeFooter,
    footerComp
  }
};
</script>

<style>
body {
  margin: 0px;
  background: url(assets/bg.png) repeat-x;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1300px) 1fr;
  grid-template-rows: 200px 235px auto auto 1fr auto;
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
.app-fullWidth {
  grid-column: -1/1;
}

@media (max-width: 1290px) {
  #app {
    grid-template-columns: 1fr minmax(230px, 720px) 1fr;
  }
}
/* глобальные стили */
.button_black {
  border-radius: 10px;
  outline: none;
  background-color: #41535f;
  border: 1px solid #41535f;
  border-bottom: 4px solid #010e16;
  color: #fff;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
}
.disable {
  opacity: 0.4;
  pointer-events: none;
}

.button_black:hover,
.active {
  background-color: #7ea232;
}
.link:hover {
  color: #7ea232;
  cursor: pointer;
}
</style>
