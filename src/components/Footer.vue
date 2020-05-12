<template>
  <div class="footer">
    <div class="section">a</div>
    <div class="section">b</div>
    <div class="all">© Минск 2020 mDoc - Национальный центр электронных услуг</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-wrap: wrap;
}
.section {
  flex: 1 1 230px;
}
.all{
    flex: 1 1 98vw;
    text-align: center;
}
</style>