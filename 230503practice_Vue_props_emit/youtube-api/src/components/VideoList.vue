<template>
  <div>
    {{VideoList}}
    <VideoListItem 
        v-for="video in VideoList"
        :key="video.id.videoID"
        :video="video"
    />
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
    name: 'TheVideoList',
    componets:{
        VideoListItem
    },        
    props: {
        VideoList: Array
    }
}
</script>

<style>

</style>