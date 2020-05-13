<template>
  <div class="enter">
    <h2>Вход осуществляется с использованием мобильной ЭЦП</h2>
    <button class="button_black button_black__size">Войти в аккаунт</button>
    <p>Зарегистрироваться</p>

    <button v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
    <h1 v-text="$ml.with('VueJS').get('title')" />
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