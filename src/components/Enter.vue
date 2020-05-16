<template>
  <div class="enter">
    <h2 v-text="$ml.with('VueJS').get('enterTitle')"></h2>
    <button
      v-text="$ml.with('VueJS').get('enterBtn')"
      class="button_black button_black__size"
      @click="onclick"
    ></button>
    <router-link tag="p" to="/registration" v-text="$ml.with('VueJS').get('enterMsg')"></router-link>
  </div>
</template>

<script>
export default {
  methods: {
    onclick() {
      window.open(
        "https://iusd.nces.by/oauth/authorize?client_id=VgLVRsPIvH7L0HNnHotJEpKHS6U8IGsF&response_type=code&state=df12rt96cv12&authentication=phone&redirect_uri=https://mdoc.nces.by/authentication/auth&scope=sign",
        "_parent"
      );
    }
  }
};
</script>

<style scoped>
.enter {
  display: grid;
  background-color: #fff;
  border-radius: 10px;
  grid-row-gap: 20px;
  padding: 30px 0 50px 35px;
  margin-top: 30px;
  z-index: 2;
}
.button_black__size {
  width: 230px;
  height: 50px;
}
.enter p:hover {
  color: #7ea232;
  outline: none;
}
</style>