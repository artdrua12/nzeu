<template>
  <div class="enter">
    <h2 v-text="$ml.with('VueJS').get('enterTitle')"></h2>
    <button v-text="$ml.with('VueJS').get('enterBtn')" class="button_black button_black__size"></button>
    <p v-text="$ml.with('VueJS').get('enterMsg')"></p>
    <button v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.enter {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 0 50px 35px;
  margin-top: 30px;
  z-index: 2;
}
.button_black__size {
  width: 230px;
  height: 50px;
}
</style>