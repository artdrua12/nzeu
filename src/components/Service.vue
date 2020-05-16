<template>
  <div class="service">
    <h2 class="app-fullWidth" v-text="$ml.with('VueJS').get('serviceTitle')"></h2>
    <div class="service-item" v-for="item in $ml.get('serviceData')" :key="item.name">
      <img :src="require(`../assets/${item.img}`)" />
      <h4>{{item.name}}</h4>
    </div>
    <button
      v-text="$ml.with('VueJS').get('enterBtn')"
      class="button_black button_black__size app-fullWidth"
      @click="onclick"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    onclick() {
      if (!this.checked) return;
      window.open(
        "https://iusd.nces.by/oauth/authorize?client_id=VgLVRsPIvH7L0HNnHotJEpKHS6U8IGsF&response_type=code&state=df12rt96cv12&authentication=phone&redirect_uri=https://mdoc.nces.by/authentication/auth&scope=sign",
        "_parent"
      );
    }
  }
};
</script>

<style scoped>
.service {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  z-index: 2;
}
.service-item {
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
}
.service-item img {
  width: 86px;
}

.button_black__size {
  width: 230px;
  height: 50px;
  justify-self: center;
}
h2,
h4 {
  text-align: center;
}
</style>