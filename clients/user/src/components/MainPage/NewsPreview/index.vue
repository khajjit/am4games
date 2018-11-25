<template>
  <div class="news-preview-block">
    <div class="selected-news" v-if="selectedNews" v-bind:style="bkgImage">

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewsPreview',
  data: () => ({
    newsList: [],
    selectedNews: null,
    bkgImage: {}
  }),
  created: function() {
    return axios.get(`/api-common/news/preview`)
      .then(response => {
        const firstNews = response.data.result[0]
        this.newsList = response.data.result
        this.selectedNews = firstNews
        this.bkgImage = { backgroundImage: `url(/api-common/image/${firstNews.previewData.imageId})`}
      })
      .catch(error => console.log('Error happened = ', error))
  }
}
</script>

<style scoped lang="sass">
.news-preview-block
  width: 100%;
  height: 560px;
  .selected-news
    width: 100%;
    height: 100%;
</style>
