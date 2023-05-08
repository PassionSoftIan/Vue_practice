<template>
  <div id="app">
    <h1>My First Youtube project</h1>
    <p>검색어: {{ searchData }}</p>
    <TheSearchBar
      @search-input-data="onSearchData"
    />
    <p>
      비디오: {{ videos }}
    </p>
    <VideoList />

  </div>
</template>

<script>
import TheSearchBar from './components/TheSearchBar.vue'
import VideoList from './components/VideoList.vue'
import axios from 'axios'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyAxS868fkcL7iGhvjWfEMp8YuWnf5NeWHo'

export default {
  name: 'App',

  components: {
    TheSearchBar,
    VideoList,
  },

  data() {
    return {
      searchData: '',
      videos: [],
    }
  },
  methods: {
    onSearchData(searchInputData) {
      this.searchData = searchInputData
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: this.searchData
      }
  
      axios({
        method:'get',
        url: API_URL,
        params
      })
      .then(response => {
        this.videos = response.data.items[0].snippet.thumbnails.default.url
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
