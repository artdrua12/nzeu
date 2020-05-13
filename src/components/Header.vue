<template>
  <div class="header">
    <img src="../assets/logo.png" alt="logo" />
    <img class="header-left" src="../assets/intro-background-img-1-1.png" alt="leftImage" />
    <img class="header-right" src="../assets/intro-background-img-1-3.png" alt="rightImage" />
    <div class="header-languages">
      <button
        class="header-but"
        v-for="lang in $ml.list"
        :key="lang"
        @click="$ml.change(lang)"
        :class="{'header-ru': lang ==='ru', 'header-en':lang ==='en' }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: grid;
  justify-content: center;
  background: url(../assets/bg_header.png) 50% 0 no-repeat,
    linear-gradient(
      to right,
      rgba(1, 112, 128, 1) 0,
      rgba(0, 105, 138, 1) 34%,
      rgba(0, 96, 156, 1) 100%
    );
}
.header img {
  margin-top: 35px;
}
.header-left {
  position: absolute;
  height: 570px;
  top: 135px;
}
.header-right {
  position: absolute;
  height: 570px;
  top: 45px;
  right: 0px;
}
.header-languages {
  position: absolute;
  top: 20px;
  right: 20px;
}
.header-but {
  width: 30px;
  height: 20px;
  margin-left: 10px;
  border: none;
}
.header-ru {
  background: url(../assets/ru.png) no-repeat;
  background-size: contain ;
}

.header-en {
  background: url(../assets/en.jpg);
  background-size: contain;
}
</style>