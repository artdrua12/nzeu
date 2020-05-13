<template>
  <div class="wrapper">
    <div class="wrapper-before"></div>
    <div class="wrapper-after"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}
.wrapper-before {
  background-image: url(../assets/pattern_city.png);
  background-repeat: repeat-х;
  height: 176px;
}
.wrapper-after {
  background-color: #1c609d;
  background-image: url(../assets/pattern_bg.png);
  background-repeat: repeat-х;
  height: 44px;
  min-width: 100%;
}
</style>