<template>
  <div class="main-page">
    <NewsPreview />
    <NewsDashboard />
    <HelloWorld /> <!-- TODO: remove after route `/` will be finished -->
    <GamesDashboard />
    <TrailersDashboard />
    <ArticlesDashboard />
  </div>
</template>

<script>
import HelloWorld from '../_shared/HelloWorld.vue' // TODO: remove after route `/` will be finished
import NewsPreview from './NewsPreview'
import NewsDashboard from './NewsDashboard'
import GamesDashboard from './GamesDashboard'
import TrailersDashboard from './TrailersDashboard'
import ArticlesDashboard from './ArticlesDashboard'

export default {
  name: 'MainPage',
  components: {
    HelloWorld, // TODO: remove after route `/` will be finished
    NewsPreview,
    NewsDashboard,
    GamesDashboard,
    TrailersDashboard,
    ArticlesDashboard
  }
}
</script>
