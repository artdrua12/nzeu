<template>
  <div class="header">
    <img src="https://mdoc.nces.by/img/logo.png" alt="logo" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: grid;
  justify-content: center;
  background: linear-gradient(
      to right,
      rgba(1, 112, 128, 1) 0,
      rgba(0, 105, 138, 1) 34%,
      rgba(0, 96, 156, 1) 100%
    ),
    url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat;
  background-size: 50% 0 no-repeat;
  height: 400px;
}
.header img {
  z-index: 10;
  background: url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat;
}
</style>