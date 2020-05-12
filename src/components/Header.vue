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
  background: url(https://mdoc.nces.by/img/bg_header.png) 50% 0 no-repeat,
    linear-gradient(
      to right,
      rgba(1, 112, 128, 1) 0,
      rgba(0, 105, 138, 1) 34%,
      rgba(0, 96, 156, 1) 100%
    );
}
.header img {
  margin-top: 35px;
}
</style>