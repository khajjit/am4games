<template>
  <footer>
    <div class="social-links-content">
      <hr />
      <ul class="social-button-list">
        <li><button></button></li>
        <li><button class="twitter"></button></li>
        <li><button class="facebook"></button></li>
        <li><button class="grinder"></button></li>
        <li><button class="google"></button></li>
        <li><button class="tree"></button></li>
      </ul>
      <div class="social-info">
        <h4 class="title">Немного о нашем сайте</h4>
        <p class="desc">
          AM4  — это большая коллекция игровой информации,<br />
          помогающей геймерам со всего мира быть в курсе<br />
          последних новостей игровой индустрии.
        </p>
      </div>
    </div>
    <div class="age-warning">+ 18</div>
    <div class="copyright-warning">
      <h4 class="title">Copyright © 2001-2019</h4>
      <p class="desc">
        Все права защищены законодательством РФ.<br />
        Использование материалов сайта возможно<br />
        только с прямой ссылкой на источник.
      </p>
    </div>
    <img class="dude-with-guns" src="../../../assets/footer/dude-with-guns.png" />
    <div class="bottom">
      <img class="rectangles" src="../../../assets/footer/bottom-rectangles.png" />
      <hr class="line" />
    </div>
  </footer>
</template>

<style scoped lang="sass">
footer
  width: 1600px;
  height: 440px;
  margin-top: -440px;
  background-color: #ebebeb;
  @media (max-width: 1600px)
    display: none;
    // TODO: rewrite this

.social-links-content
  width: 740px;
  height: 270px;
  background-image: url('../../../assets/footer/social-links-background.png');
  background-color: #33282c;
  margin-left: 120px;
  hr
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 10px;
    background-color: #f7d54a;
  .social-button-list
    padding: 0;
    margin-top: -10px;
    margin-left: -10px;
    display: inline-flex;
    list-style: none;
    float: left;
    li:first-child > button
      border: 0;
      margin-right: 14px;
      background-position: center;
      background-image: url('../../../assets/footer/outgoing-dude.png');
      background-repeat: no-repeat;
      background-color: #f7d54a;
      height: 60px;
      width: 60px;
    li:nth-child(n + 2) > button
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 8px;
      border-radius: 2px;
      margin-top: 22px;
      height: 38px;
      width: 42px;
      border: 0;
    li:nth-child(n + 2)
      > .twitter
        background-color: #00acee;
        background-image: url('../../../assets/footer/twitter.png');
      > .facebook
        background-color: #3b5998;
        background-image: url('../../../assets/footer/facebook.png');
      > .grinder
        background-color: #ea4c89;
        background-image: url('../../../assets/footer/grinder.png');
      > .google
        background-color: #db4a39;
        background-image: url('../../../assets/footer/google.png');
      > .tree
        background-color: #598728;
        background-image: url('../../../assets/footer/tree.png');
  .social-info
    float: left;
    text-align: left;
    margin-top: 35px;
    margin-left: 35px;
    .title
      color: #ffffff;
      font-family: "Open Sans Semibold";
      font-weight: 600;
      font-size: 17px;
    .desc
      color: #a7a7a7;
      margin-top: 25px;
      line-height: 24px;
      font-weight: 300;
      font-size: 15px;

.dude-with-guns
  float: right;
  margin-top: -330px;
  margin-right: -200px;

.age-warning
  width: 100px;
  height: 60px;
  float: right;
  color: #000000;
  margin-top: -230px;
  margin-right: 150px;
  align-items: center;
  display: inline-grid;
  border: 5px solid #d4d4d4;
  font-family: "Open Sans";
  line-height: 24px;
  font-weight: 300;
  font-size: 31px;
.copyright-warning
  float: right;
  text-align: left;
  margin-right: 140px;
  .title
    margin-bottom: 5px;
    font-family: "Open Sans Semibold";
    font-weight: 600;
  .desc
    font-family: "Open Sans Light";
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;

.bottom
  position: relative;
  .rectangles
    /* TODO: rewrite without image */
    /* background-image: linear-gradient(-193deg, #ff4c36 0%, #a31706 100%); */
    float: right;
    float: right;
    margin-top: -87px;
    margin-right: -550px;

  .line
    background: linear-gradient(90deg, #ff4c36 50%, #00abed 50%);
    margin-top: 160px;
    height: 10px;
    width: 100%;
    border: 0;
</style>
