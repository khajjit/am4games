<template>
  <div class="news-dashboard-block">
    <div class="heading">
      <span class="title">Новости</span>
      <router-link to="/news" class="link-to-news">Все новости</router-link>
      <div class="dropdown-menu">
        <button class="dropdown-button" v-on:click="toggleDropdownMenu()">
          {{orderBy}} <img src="../../../assets/common/caret-down.svg" />
        </button>
        <div class="dropdown-content" v-bind:style="{ display: isDropdownOpen ? 'block' : 'none' }">
          <a href="#">Все</a>
          <a href="#">Новые</a>
          <a href="#">Популярные</a>
        </div>
      </div>
    </div>
    <div class="content">
      <span class="no-content-msg">Not Available Yet</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDashboard',
  data: () => ({
    orderBy: 'All', // ['All', 'Newest', 'Popular'],
    isDropdownOpen: false
  }),
  methods: {
    toggleDropdownMenu: function() {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  }
}
</script>

<style scoped lang="sass">
.news-dashboard-block
  width: 86.25%
  .heading
    text-align: left
    border-bottom: 5px solid #efefef
    padding-bottom: 10px
    margin-bottom: 25px
    .title
      color: #272727
      cursor: pointer
      font-size: 40px
      font-weight: 700
      line-height: 24px
      margin-right: 40px
      margin-left: 30px
    .link-to-news
      color: #30b5d8
      font-size: 18px
      font-weight: 300
      line-height: 24px
      vertical-align: top
      text-decoration: none
      border-bottom: 1px dashed #30b5d8
      padding-bottom: 3px
    .dropdown-menu
      width: 350px
      height: 50px
      margin-top: -10px
      background-color: #ebebeb
      overflow: hidden
      float: right
      .dropdown-button
        width: 100%
        border: none
        outline: none
        cursor: pointer
        font-size: 25px
        font-weight: 300
        line-height: 50px
        padding-left: 20px
        text-align: left
        color: #30b5d8
        > img
          width: 20px
          float: right
      .dropdown-content
        position: absolute
        background-color: #f9f9f9
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2)
        min-width: 160px
        z-index: 1
  .content
    width: 100%
    height: 990px
    background-color: white
    border: 5px solid #efefef
    background: linear-gradient(to top, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.05) 53%, rgba(0, 0, 0, 0) 100%)
    cursor: pointer
    .no-content-msg
      font-size: 30px
      font-weight: 500
      line-height: 990px
</style>
