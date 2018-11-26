<template>
  <div class="news-preview-block">
    <div class="selected-news" v-if="selectedNews" v-bind:style="bkgImage">
      <div class="list-news">
        <div class="upper-diagonal" />
        <img
          class="mini-image"
          v-for="(item, index) in newsList"
          :src="'/api-common/image/' + item.previewData.imageId"
          v-on:click="selectNews(index)"
        />
        <div class="lower-diagonal" />
        <div class="text-box">
          <h2 class="title">{{selectedNews.previewData.title}}</h2>
          <p class="desc">{{selectedNews.previewData.desc}}</p>
        </div>
      </div>
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
    bkgImage: null
  }),
  created: function() {
    return axios.get(`/api-common/news/preview`) // to `vuex`
      .then(response => {
        const firstNews = response.data.result[0] // to `vuex`
        this.newsList = response.data.result
        this.setupSelectedNews(firstNews)
        this.setupBkgImage(firstNews.previewData.imageId)
      })
      .catch(error => console.log('Error happened = ', error))
  },
  methods: {
    selectNews: function(index) {
      this.setupSelectedNews(this.newsList[index])
      this.setupBkgImage(this.selectedNews.previewData.imageId)
    },
    setupSelectedNews: function(news) {
      this.selectedNews = news
    },
    setupBkgImage: function(id) {
      this.bkgImage = { backgroundImage: `url(/api-common/image/${id})` }
    }
  }
}
</script>

<style scoped lang="sass">
.news-preview-block
  width: 100%;
  height: 600px;
  .selected-news
    width: 100%;
    height: 100%;
    .list-news
      width: 640px;
      height: 400px;
      float: right;  // or `left`
      margin-top: 80px;
      margin-left: 50px;
      margin-right: 50px;
      text-align: right;
      opacity: 0.4;
      // background-color: green; // remove
      .upper-diagonal,
      .lower-diagonal,
      .mini-image
        cursor: pointer;
        display: inline-block;
        margin: 0;
        width: 160px;
        height: 100px;
      .lower-diagonal,
      .mini-image:nth-child(n + 5)
        display: block;
        float: right;
        clear: both;
      .mini-image:nth-child(5)
        margin-top: -4px;
      .mini-image
        image-rendering: optimizequality;
      &:hover
        opacity: 1;
      .text-box
        width: 420px;
        height: 240px;
        padding: 30px;
        background-color: #29abcd;
        margin: 0px;
        margin-top: -4px;
        .title
          color: #000000;
          font-size: 28px;
          font-weight: 700;
          line-height: 40px;
          text-align: left;
        .desc
          color: #ffffff;
          font-size: 17px;
          font-weight: 300;
          line-height: 26px;
          margin-top: 20px;
          text-align: left;
</style>
