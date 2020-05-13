<template>
  <div class="footer">
    <div class="footer-section">
      <h4 v-text="$ml.with('VueJS').get('footerAdress')"></h4>
      <p>info@nces.by</p>
      <p v-text="$ml.with('VueJS').get('footerCity')"></p>
      <p v-text="$ml.with('VueJS').get('footerEnterprise')"></p>
      <p v-text="$ml.with('VueJS').get('footerNational')"></p>
      <p v-text="$ml.with('VueJS').get('footerStreet')"></p>
    </div>
    <div class="footer-section">
      <h4 v-text="$ml.with('VueJS').get('footerContacts')"></h4>
      <p>
        Тел.: +375 17 311 30 00
        <br />Факс: +375 17 311 30 06
        <br />e-mail: info@nces.by
        <br />www.nces.by
      </p>
    </div>
    <div v-text="$ml.with('VueJS').get('footerCopy')"
      class="footer-bottom footer-fullWidth"
    >© Минск 2020 mDoc - Национальный центр электронных услуг</div>
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
  background-image: url(../assets/bg_footer.png);
  background-repeat: repeat-х;

  font-size: 18px;
  color: #fff;
  font-family: Roboto, Arial, sans-serif;
  padding: 0 30px;
}
.footer-section {
  flex: 0 1 500px;
  border-top: 2px solid rgb(133, 161, 185);
  margin: 25px 0px 0 0;
}
.footer-section p{
  margin: 0px;
}

.footer-section:hover {
  border-color: white;
}
.footer-fullWidth {
  flex: 1 1 98vw;
  text-align: center;
}
.footer-bottom {
  padding: 50px 0;
}
</style>