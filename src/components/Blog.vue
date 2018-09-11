<template>
  <b-container fluid>
    <b-row align-v="center">
      <b-col></b-col>
      <b-col sm="6">
        <div v-for="entry in entries">
          <h2>{{entry.title}}</h2>
          <b><span>{{entry.timestamp}}</span></b>
          <br>
          <br>

          <p>{{entry.body | truncate(100)}}</p>
          <b-button v-bind:href="entry.slug" variant="outline-success"> Get more>> </b-button>
          <br>
          <hr>
          <br>
        </div>
      </b-col>
      <b-col></b-col>
</b-row>
</b-container>



  
</template>

<script>

import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      entries: ''
    }
  },
  methods: {
    getBlogEntries () {
      const path = 'http://localhost:8000/api/articles/'
      axios.get(path)
        .then((response) => {
          // eslint-disable-next-line
          console.log("Now i think, i have data")
          this.entries = response.data
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
        })
    }

  },
  created: function () {
    // eslint-disable-next-line
    console.log('this is created')        
    this.getBlogEntries()
  }
}
</script>

<style scoped>
</style>
