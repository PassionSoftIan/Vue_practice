<template>
  <div class="card">
    <!-- 넘겨받은 이미지가 고양이면 빨간색 cat -->
    <!-- 넘겨받은 이미지가 강아지면 파란색 dog -->
    <!-- 조건부 클래스 바인딩 || :class="{ 'className': condition }"-->
    <p
      :class="{
          'cat': image.status === 'cat',
          'dog': image.status === 'dog'
          }"
    > 
      {{ image.status }}
    </p>
    <!-- 이미지 -->
    <img :src="image.url" alt="">
  </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: {
    image: Object
  }
}
</script>

<style>
.cat {
  color: red;
}

.dog {
  color: blue
}

.card {
  width: 300px;
  height: 300px;
}

.card > img {
  width: 100%;
  height: 80%;
}
</style>