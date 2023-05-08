<template>
  <div id="app">
    <!-- 클릭 했을 때, AJAX 요청을 보내도록 해야한다. -->
    <!-- ~하면 ~한다. -> event에 대한 일을 처리 -->
    <!-- 1. @click => method를 실행한다. -->
    <button @click="getCatImage">getCat</button>
    <!-- 위쪽은 vue instance의 method를 호출 -->
    <!-- 아래쪽은 store의 actions에 정의한 getDogImage -->
    <button @click="getDogImage">getDog</button>
    <hr>
    <!-- state에 데이터가 있으므로 별도로 prop 해줄 데이터 없음. -->
    <AnimalImages />
  </div>
</template>

<script>
// map Helper
import { mapActions } from 'vuex'
import AnimalImages from './components/AnimalImages'

// 현재 컴포넌트의 Vue Instace의 method를 실행 -> methods들을 정의하고, 대상을 호출
export default {
  name: 'App',
  components: {
    AnimalImages
  },
  methods: {
    // 많이들 오해하는 것 중 하나가... mapActions 한번만 쓸수 있느냐? 아니다.
    // ...mapActions로 가지고온 getDogImage를 커스텀할 수 있다 
    ...mapActions(['getDogImage']),
    // 각각의 actions의 method 각각 다르게 호출해서 custom 가능하다.
    // ...mapActions(['getCatImage']),
    // ...mapActions(['getDogImage', 'getCatImage']),


    // 이 함수가 호출이 되면 무엇을 하느냐?
    getCatImage() {
      // vuex를 안쓴다면... 이곳에서 axios?
      // 아니지? vuex를 써도 여기서 axios?
      // actions에서 axios 요청을 보낼 method 정의후에 다시 돌아오자.
      // actions에 정의한 getCatImage를 호출한다. payload? 따로 없다.
      this.$store.dispatch('getCatImage')
    },
  }
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
