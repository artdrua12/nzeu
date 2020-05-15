<template>
  <div class="enter">
    <h2>
      <span v-text="$ml.with('VueJS').get('registrationTitle')"></span>
      <a
        v-text="$ml.with('VueJS').get('registrationTitleLink')"
        class="link enter-link"
        href="https://nces.by/pki/service/mobile-ecp/"
      ></a>
    </h2>
    <label>
      <input class="enter-checkbox" type="checkbox" v-model="checked" />
      <span v-text="$ml.with('VueJS').get('registrationCheckbox')"></span>
      <span v-text="$ml.with('VueJS').get('registrationCheckboxLink')" class="link enter-link"></span>
    </label>
    <button
      v-text="$ml.with('VueJS').get('enterBtn')"
      class="button_black button_black__size"
      :class="{'disable': !this.checked}"
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

<style>
.enter {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 25px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 0 50px 35px;
  margin-top: 30px;
  z-index: 2;
}
.button_black__size {
  width: 230px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #41535f;
  border-bottom: 4px solid #010e16;
}
.enter-link {
  color: #41535f;
  text-decoration: none;
}
.enter-checkbox {
  transform: scale(2);
  cursor: pointer;
  margin: 0 10px 0 10px;
}
</style>