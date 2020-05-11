<template>
  <div class="card card_white">
    <img src="https://mdoc.nces.by/img/input.png" />
    <h2>вход</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: #41535f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-height: 150px;
  max-height: 230px;
}
.card_white {
  color: white;
}
.card img {
  padding: 12px;
  border: 1px solid white;
  border-radius: 10%;
}
</style>
