<template>
  <div class="card">
    <router-link
      tag="button"
      v-for="item in $ml.get('cardsData')"
      :key="item.name"
      :to="item.to"
      active-class="active"
      exact
      class="card-item button_black"
    >
      <img :src="require(`../assets/${item.img}`)" />
      <h4>{{item.name}}</h4>
    </router-link>
  </div>
</template>

<script>
import { MLBuilder } from "vue-multilanguage";

export default {
  data() {
    return {
    };
  },
  computed: {
    mlcardsData() {
      return new MLBuilder("cardData");
    }
  }
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 15px;
  padding: 25px;
  border-radius: 10px;
  background-color: #07273c;
  height: auto;
  z-index: 2;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 230px;
}

.card-item img {
  padding: 12px;
  border: 1px solid white;
  border-radius: 10%;
}
.card-item h4 {
  margin-bottom: 0px;
}

@media (max-width: 1290px) {
  .card {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
  .card-item {
    height: 190px;
  }
}
</style>
