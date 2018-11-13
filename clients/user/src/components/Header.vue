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
      <button>Вход</button>
      <button>Регистрация</button>
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
  color: green;
  height: 80px;

.menu
  margin: 0;
  float: left;
  list-style-type: none;
  padding: 0;
  li
    display: inline-block;
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
</style>
