<template>
  <h2>News Dashboard</h2>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewsDashboard',
  created: () => {
    axios.get(`/api-common/test`)
      .then(response => {
        console.log('Response = ', response)
      })
      .catch(error => {
        console.log('Error happened = ', error)
      })
  }
}

</script>
