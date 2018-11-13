<template>
  <div class="header">
    <ul class="menu">
      <li class="menu-icon">
        <img src="../assets/header-icon.png">
      </li>
      <li>Новости</li>
      <li>Статьи</li>
      <li>Видео</li>
      <li>Игры</li>
      <li>Ещё</li>
      <li>searchBtn</li>
    </ul>
    <div class="auth-panel">
      <button class="login">Вход</button>
      <button class="register">Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped lang="sass">
.header
  height: 70px;

.menu
  margin: 0;
  float: left;
  list-style-type: none;
  padding: 0;
  li
    display: inline-block;
  li:nth-child(n + 2)
    color: #32272b;
    font-family: "Open Sans";
    margin: 0 15px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
  .menu-icon
    width: 200px;
    height: 70px;
    background-color: #30b5d8;
    margin-left: 110px;
    color: white;
    text-align: center;
    vertical-align: middle;

.auth-panel
  float: right;
  margin: 15px 110px 15px 0px;
  .login
    font-family: "Open Sans";
    margin-right: 17px;
    color: #000000;
    border: 0;
    background-color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.54px;
  .register
    font-family: "Open Sans";
    width: 169px;
    height: 40px;
    color: #000000;
    border: 0;
    background-color: #30b5d8;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.9px;
</style>
