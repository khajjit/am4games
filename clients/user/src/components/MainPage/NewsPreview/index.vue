<template>
  <h2>News Preview</h2>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewsPreview',
  created: () => axios.get(`/api-common/news/preview`)
    .then(response => console.log('Response = ', response))
    .catch(error => console.log('Error happened = ', error))
}
</script>
