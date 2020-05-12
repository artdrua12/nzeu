<template>
  <div class="footer">
    <div class="footer-section">
      <h4>Наш адрес:</h4>
      <h4>
        info@nces.by
        <br />220004 г. Минск,
        <br />Республиканское унитарное
        <br />предприятие "Национальный центр
        <br />электронных услуг"
        <br />ул. Раковская, д.14
      </h4>
    </div>
    <div class="footer-section">
      <h4>Контакты:</h4>
      <h4>
        Тел.: +375 17 311 30 00
        <br />Факс: +375 17 311 30 06
        <br />e-mail: info@nces.by
        <br />www.nces.by
      </h4>
    </div>
    <div class="footer-fullWidth">© Минск 2020 mDoc - Национальный центр электронных услуг</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-wrap: wrap;
  height: 176px;
}
.footer-section {
  flex: 1 1 230px;
}
.footer-fullWidth {
  flex: 1 1 98vw;
  text-align: center;
}
</style>