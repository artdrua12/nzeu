<template>
  <div class="card">
    <button v-for="i in 5" :key="i" class="card-item button_black">
      <img src="https://mdoc.nces.by/img/input.png" />
      <h2>вход</h2>
    </button>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-column-gap: 25px;
  padding: 25px;
  border-radius: 10px;
  background-color: #07273c;
  height: auto;
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
.card-item h2 {
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
