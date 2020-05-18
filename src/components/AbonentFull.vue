<template>
  <div>
    <h4>Полная информацио про абонента {{id}}</h4>
    <h4>Login {{$route.query.name}}</h4>
    <h4>Дата подключения {{$route.query.year}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"]
    };
  }
};
</script>

<style scoped>
</style>