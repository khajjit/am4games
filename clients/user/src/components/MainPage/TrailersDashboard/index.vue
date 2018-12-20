<template>
  <div class="trailers-dashboard-wrapper">
    <div class="trailers-dashboard-block">
      <div class="heading">
        <router-link to="#trailers" class="title">ТРЕЙЛЕРЫ</router-link>
        <router-link to="/trailers" class="link">Весь каталог</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped lang="sass">
@mixin blockMainPage // TODO: move from local space for all components in MainPage
  height: 100%
  width: 86.25%
  .heading
    text-align: left
    padding-top: 50px
    .title
      cursor: pointer
      font-size: 40px
      font-weight: 700
      line-height: 24px
      text-decoration: none
      margin-right: 40px
      margin-left: 30px
    .link
      font-size: 18px
      font-weight: 300
      line-height: 24px
      vertical-align: top
      text-decoration: none
      border-bottom: 1px dashed #30b5d8
      padding-bottom: 3px

.trailers-dashboard-wrapper
  width: 100%
  height: 890px
  background-color: #eae7d6
  .trailers-dashboard-block
    @include blockMainPage
    .heading
      .title
        color: #241b1b
      .link
        color: #30b5d8
</style>
