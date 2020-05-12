<template>
  <div class="card">
    <div v-for="i in 5" :key="i" class="card-item">
      <img src="https://mdoc.nces.by/img/input.png" />
      <h2>вход</h2>
    </div>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  border-radius: 10px;
  background-color: #07273c;
  height: auto;
}

.card-item {
  background-color: #41535f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  height: 230px;
}

.card-item img {
  padding: 12px;
  border: 1px solid white;
  border-radius: 10%;
}
.card-item h2 {
  margin-bottom: 0px;
}

.card-item:hover {
  background-color: #7ea232;
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
