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
        <div class="text-box" v-bind:style="customStyle.textBox">
          <h2 class="title" v-bind:style="customStyle.title">{{selectedNews.previewData.title}}</h2>
          <p class="desc" v-bind:style="customStyle.desc">{{selectedNews.previewData.desc}}</p>
        </div>
      </div>
    </div>
    <div class="filter-panel">
      <img src="../../../assets/common/NewsPreview-bottom-rectangles.png" />
      <div>
        <span>Сортировать:</span>
        <button
          v-bind:class="orderBy === `Popular` ? `toggled` : ``"
          v-on:click="filterNewsBy(`Popular`)"
        >Популярные
        </button>
        <button
          v-bind:class="orderBy === `Fresh` ? `toggled` : ``"
          v-on:click="filterNewsBy(`Fresh`)"
        >Новые
        </button>
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
    orderBy: 'Popular', // `Popular` or `Fresh`
    selectedNews: null,
    customStyle: {
      textBox: null,
      title: null,
      desc: null
    },
    bkgImage: null
  }),
  created: function() {
    return axios.get(`/api-common/news/preview`) // TODO: move to `vuex`
      .then(response => {
        this.newsList = response.data.result
        this.selectNews(0, 0)
      })
      .catch(error => console.log('Error happened = ', error))
  },
  methods: {
    selectNews: function(index, timeout = 200) {
      setTimeout(() => {
        this.setupSelectedNews(this.newsList[index])
        this.setupCustomStyle(this.newsList[index])
        this.setupBkgImage(this.selectedNews.previewData.imageId)
      }, timeout)
    },
    filterNewsBy: function(orderBy) {
      this.orderBy = orderBy
    },
    setupSelectedNews: function(news) {
      this.selectedNews = news
    },
    setupBkgImage: function(id) {
      this.bkgImage = { backgroundImage: `url(/api-common/image/${id})` }
    },
    setupCustomStyle: function(news) {
      this.customStyle.textBox = { backgroundColor: news.previewData.textBoxColor }
      this.customStyle.title = { color: news.previewData.titleColor }
      this.customStyle.desc = { color: news.previewData.descColor }
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
      float: right;
      margin-top: 80px;
      margin-left: 50px;
      margin-right: 50px;
      text-align: right;
      opacity: 0.4;
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
          margin-top: 15px;
          text-align: left;
  .filter-panel
    > img
      // TODO: rewrite with css and make possible change colors of rectangles
      float: left;
      margin-top: -67px;
    > div
      float: right;
      margin-top: 40px;
      margin-right: 80px;
      > span
        color: #272727;
        font-size: 25px;
        font-weight: 300;
        line-height: 24px;
        margin-right: 45px;
      > button
        cursor: pointer;
        font-size: 25px;
        font-weight: 300;
        line-height: 24px;
        margin-right: 10px;
        border-radius: 3px;
        line-height: 50px;
        padding: 0px 40px;
        background-color: white;
        border: 0;

        &.toggled
          color: #33282c;
          font-weight: 600;
          background-color: #f2ca5b;
</style>
