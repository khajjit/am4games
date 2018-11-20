<template>
  <header>
    <ul class="menu">
      <li class="menu-icon">
        <router-link to="/">
          <img src="../../assets/header/am4-icon.png">
        </router-link>
      </li>
      <li><router-link to="/news">Новости</router-link></li>
      <li><router-link to="/articles">Статьи</router-link></li>
      <li><router-link to="/trailers">Видео</router-link></li>
      <li><router-link to="/games">Игры</router-link></li>
      <li><router-link to="/about">Ещё</router-link></li>
      <li class="search-button">
        <img src="../../assets/header/search-icon.png">
      </li>
    </ul>
    <div class="auth-panel" v-if="!userInfo">
      <button class="login" v-on:click="login">Вход</button>
      <button class="register">Регистрация</button>
    </div>
    <div class="user-panel" v-if="userInfo">
      <button class="user-preview" v-on:click="logout">{{userInfo.login}}</button>
      <img class="user-image">
      <!-- <form class="user-menu"></form> -->
    </div>
  </header>
</template>

<script>
import { getUserInfo, setUserInfo, removeUserInfo } from "../../utils/local-storage"
// split this file into 'Header/Menu' and 'Header/Auth'? (+ Header/index.js or .vue)
export default {
  name: 'Header',
  data: function() {
    return {
      userInfo: getUserInfo()
    }
  },
  methods: {
    login: function() {
      this.userInfo = { login: '709KG' }
      setUserInfo({ login: '709KG' })
    },
    logout: function() {
      this.userInfo = false
      removeUserInfo()
    }
  }
}
</script>

<style scoped lang="sass">
header
  height: 70px;

.menu
  margin: 0;
  float: left;
  list-style-type: none;
  padding: 0;
  li
    cursor: pointer;
    display: inline-block;
  li:nth-child(n + 2)
    margin: 0 15px;
    color: #32272b;
    font-family: "Open Sans";
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 20px;
  li.search-button
    background-color: #ededed;
    line-height: 65px;
    width: 70px;
  .menu-icon
    width: 200px;
    height: 70px;
    color: white;
    margin-left: 110px;
    background-color: #30b5d8;
    vertical-align: middle;
    text-align: center;

.auth-panel
  float: right;
  margin: 15px 110px 15px 0px;
  .login
    border: 0;
    color: #000000;
    cursor: pointer;
    margin-right: 17px;
    font-family: "Open Sans";
    background-color: white;
    letter-spacing: 0.54px;
    line-height: 30px;
    font-weight: 700;
    font-size: 18px;
  .register
    border: 0;
    width: 169px;
    height: 40px;
    color: #000000;
    cursor: pointer;
    font-family: "Open Sans";
    background-color: #30b5d8;
    letter-spacing: 0.9px;
    line-height: 30px;
    font-weight: 700;
    font-size: 18px;
.user-panel
  float: right;
  line-height: 70px;
  margin-right: 115px;
  .user-preview
    border: 0;
    color: #000000;
    cursor: pointer;
    margin-right: 17px;
    background-color: white;
    font-family: "Open Sans";
    text-transform: uppercase;
    letter-spacing: 0.72px;
    line-height: 27px;
    font-weight: 700;
    font-size: 18px;
  .user-image
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-bottom: 4px;
    border: 2px solid #30b5d8;
    background-color: #33282c;
    vertical-align: middle;
    display: inline-block;
    border-radius: 50%;
</style>
