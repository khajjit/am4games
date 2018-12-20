<template>
  <div class="news-dashboard-block">
    <div class="heading">
      <router-link to="#news" class="title">НОВОСТИ</router-link>
      <router-link to="/news" class="link-to-news">Все новости</router-link>
      <div class="dropdown-menu">
        <button
          class="dropdown-button"
          v-bind:class="{ active: isDropdownOpen }"
          v-on:click="toggleDropdownMenu()"
        >
          {{this.translateOrderBy(orderBy)}}
          <img src="../../../assets/main-page/news-dashboard/caret-down.png" />
        </button>
        <div class="dropdown-content" v-bind:style="{ display: isDropdownOpen ? 'block' : 'none' }">
          <a v-on:click="filterNewsBy('All')">Все</a>
          <a v-on:click="filterNewsBy('Newest')">Новые</a>
          <a v-on:click="filterNewsBy('Popular')">Популярные</a>
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
    orderBy: 'All', // ['All', 'Newest', 'Popular', '...'],
    isDropdownOpen: false
  }),
  methods: {
    toggleDropdownMenu: function() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    filterNewsBy: function(orderBy) {
      this.orderBy = orderBy
      this.toggleDropdownMenu()
    },
    translateOrderBy: function(orderBy) {
      switch (orderBy) {
        case 'All':
          return 'Все'
        case 'Newest':
          return 'Новые'
        case 'Popular':
          return 'Популярные'
      }
    }
  }
}
</script>

<style scoped lang="sass">
.news-dashboard-block
  width: 86.25%
  margin-top: 150px
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
      text-decoration: none
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
          float: right
          margin-top: 6%
          margin-right: 16px
        &.active
          background-color: #33282c
          > img
            transform: scaleY(-1)
      .dropdown-content
        position: absolute
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2)
        background-color: #ffffff
        min-width: 350px
        z-index: 1
        a
          float: none
          color: #191919
          cursor: pointer
          font-size: 25px
          font-weight: 300
          line-height: 45px
          padding: 12px 16px
          text-decoration: none
          text-align: left
          display: block
          &:hover
            color: #30b5d8
            background-color: #eeeeee
  .content
    height: 990px
    width: calc(100% - 10px)
    background-color: white
    border: 5px solid #efefef
    background: linear-gradient(to top, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.05) 53%, rgba(0, 0, 0, 0) 100%)
    cursor: pointer
    .no-content-msg
      font-size: 30px
      font-weight: 500
      line-height: 990px
</style>
