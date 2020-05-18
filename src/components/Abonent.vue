<template>
  <div class="abonent">
    <h2>Текущий абонент {{id}}</h2>
    <!-- <router-link tag="el-button" type="primary" :to="'/abonent/'+ id +'/full'">Детальная информация</router-link> -->
    <router-link
      tag="el-button"
      type="primary"
      :to="{name:'abonentFull', params:{id: id}, query: {name:'Vasj',year:2017}}"
    >
    Детальная информация</router-link>
    <el-divider></el-divider>
    <router-view></router-view>
    <el-button type="primary" icon="el-icon-refresh-right" @click="goBack"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"]
    };
  },
  methods: {
    goBack() {
      this.$router.push("/smdo");
    }
  },
  watch: {
    $route(toR, fromR) {
      this.id = toR.params["id"];
      console.log(fromR);
    }
  }
};
</script>

<style scoped>
.abonent {
  height: 300px;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 30px;
  z-index: 2;
}
</style>