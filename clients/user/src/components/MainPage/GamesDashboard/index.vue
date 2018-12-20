<template>
  <div class="games-dashboard-wrapper">
    <div class="games-dashboard-block">
      <div class="heading">
        <router-link to="#games" class="title">ИГРЫ</router-link>
        <router-link to="/games" class="link-to-games">Весь каталог</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped lang="sass">
.games-dashboard-wrapper
  width: 100%
  height: 890px
  background-color: #2e8a7d
  .games-dashboard-block
    height: 100%
    width: 86.25%
    .heading
      text-align: left
      padding-top: 50px
      .title
        color: #ffffff
        cursor: pointer
        font-size: 40px
        font-weight: 700
        line-height: 24px
        text-decoration: none
        margin-right: 40px
        margin-left: 30px
      .link-to-games
        color: #fffefe
        font-size: 18px
        font-weight: 300
        line-height: 24px
        vertical-align: top
        text-decoration: none
        border-bottom: 1px dashed #30b5d8
        padding-bottom: 3px
</style>
