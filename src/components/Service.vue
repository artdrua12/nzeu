<template>
  <div class="service">
    <p class="app-fullWidth service-title" v-text="$ml.with('VueJS').get('serviceTitle')"></p>
    <div class="service-item" v-for="item in $ml.get('serviceData')" :key="item.name">
      <img :src="require(`../assets/${item.img}`)" />
      <p class="service-text">{{item.name}}</p>
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
  grid-gap: 30px;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 30px;
  z-index: 2;
  text-align: center;
}
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-item img {
  width: auto;
  height: 60px;
}

.button_black__size {
  width: 230px;
  height: 50px;
  justify-self: center;
}
.service-title {
  font-size: 20px;
  min-height: 70px;
}
.service-text {
  font-size: 17px;
  min-height: 125px;
}

@media (max-width: 600px) {
.service {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
}
</style>