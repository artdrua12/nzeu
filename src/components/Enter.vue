<template>
  <div class="enter">
    <h2 v-text="$ml.with('VueJS').get('enterTitle')"></h2>
    <button
      v-text="$ml.with('VueJS').get('enterBtn')"
      class="button_black button_black__size"
      @click="onclick"
    ></button>
    <p v-text="$ml.with('VueJS').get('enterMsg')"></p>
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
.enter p:hover{
  color: #7ea232;
}
</style>