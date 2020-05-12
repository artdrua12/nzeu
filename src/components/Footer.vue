<template>
  <div class="footer">
    <div class="footer-section">
      <h4>Наш адрес:</h4>
      <p>
        info@nces.by
        <br />220004 г. Минск,
        <br />Республиканское унитарное
        <br />предприятие "Национальный центр
        <br />электронных услуг"
        <br />ул. Раковская, д.14
      </p>
    </div>
    <div class="footer-section">
      <h4>Контакты:</h4>
      <p>
        Тел.: +375 17 311 30 00
        <br />Факс: +375 17 311 30 06
        <br />e-mail: info@nces.by
        <br />www.nces.by
      </p>
    </div>
    <div class="footer-bottom footer-fullWidth">© Минск 2020 mDoc - Национальный центр электронных услуг</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  min-height: 300px;
  background-color: #1c609d;
  background-image: url(https://mdoc.nces.by/img/bg_footer.png);
  background-repeat: repeat-х;

  color: white;
  padding: 0 30px;
}
.footer-section {
  flex: 0 1 500px;
}
.footer-section h4 {
  border-top: 2px solid rgb(133, 161, 185);
  padding: 14px 0px 0 0 ;
}
.footer-section h4:hover{
    border-color: white;
}
.footer-fullWidth {
  flex: 1 1 98vw;
  text-align: center;
}
.footer-bottom{
    padding: 50px 0;
}
</style>