<template>
  <div class="articles-dashboard-wrapper">
    <div class="articles-dashboard-block">
      <div class="heading">
        <router-link to="#articles" class="title">СТАТЬИ</router-link>
        <router-link to="/articles" class="link-to-articles">Все статьи</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped lang="sass">
.articles-dashboard-wrapper
  width: 100%
  min-height: 1330px // TODO: Remove that later
  .articles-dashboard-block
    height: 100%
    width: 86.25%
    .heading
      text-align: left
      padding-top: 50px
      .title
        color: #000000
        cursor: pointer
        font-size: 40px
        font-weight: 700
        line-height: 24px
        text-decoration: none
        margin-right: 40px
        margin-left: 30px
      .link-to-articles
        color: #bf2d2d
        font-size: 18px
        font-weight: 300
        line-height: 24px
        vertical-align: top
        text-decoration: none
        border-bottom: 1px dashed #30b5d8
        padding-bottom: 3px
</style>
