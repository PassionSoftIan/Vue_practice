<template>
  <div>
    <!-- select의 값이 바뀔 떄 마다 state.status를 바꾼다. -> ~하면 ~한다. -->
    <select 
      @change="onChange"
      name="status" 
      id="setStatus"
    >
      <!-- 사용자에게 보여질 텍스트와 실제 사용될 value 구분 -->
      <option value="all">전체</option>
      <option value="cat">고양이</option>
      <option value="dog">강아지</option>
    </select>
    <ul class="card-list">
      <!-- 모든 state.images 가져와서 반복 -->
      <!-- computed로 계산 완료된 결과로 순회 -->
      <AnimalCard
        v-for="image in getStatusByImages"
        :key="image.id"
        :image="image"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AnimalCard from './AnimalCard.vue'

export default {
  name: 'AnimalImages',
  components: {
    AnimalCard
  },
  methods: {
    onChange(event) {
      // 근데...actions 하는일 commit 밖에 없는데?
      // this.$store.dispatch('changeStatus', event.target.value)
      this.$store.commit('CHANGE_STATUS', event.target.value)
    }
  },
  computed: {
    ...mapGetters(['getStatusByImages']),
    // 종속대상의 값이 변경될 때 새롭게 값을 계산하고, 그 결과인 함수의 반환값을 사용할 수 있게 한다.
    // images() {
    //   return this.$store.getters.getStatusByImages
    // }
  }
}
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>