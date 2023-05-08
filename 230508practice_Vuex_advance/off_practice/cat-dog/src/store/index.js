import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import CatStore from './CatStore';
import createPersistedState from "vuex-persistedstate";

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search'
const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    // 사용자가 select를 바꿀때마다 바뀌어야 함.
    status: 'all'
  },
  // computed와 같은 역할을 해준다.
  getters: {
    getStatusByImages(state) {
      // 사용자가 선택한 status에 따라서 반환해줄 배열의 내용물을 바꾼다.
      const images = state.images.filter(image => {
        // dog면 개 이미지만
          if (state.status === 'dog') {
            return image.status === 'dog'
            // cat 이면 고양이 이미지만
          } else if (state.status === 'cat') {
            return image.status === 'cat'
          }
        // all 이라면 모든 이미지를
        return image
      })
      return images
    }
  },
  mutations: {
    // 상태 변화
    GET_IMAGE(state, payload) {
      state.images.push(payload)
    },
    CHANGE_STATUS(state, payload) {
      state.status = payload
    }
  },
  actions: {
    // acions에 정의하는 메서드는 인자로
    // context를 첫버째로 넘겨 받는다.
    // context를 통해서 다른 객체나 속성에 접근할 일 없이
    // commit (mutations를 호출만 할거라면...) 
    // const  commit  = context.commit
    // const { commit } = context
    getCatImage({ commit }) {
      axios({
        method:'get',
        // 나중에 프로젝트를 하게 되면... main domain은... 모든 axios에서 다쓴다.
        // http://127.0.0.1:800/api/v1/ -> 이건 모든 경로에서 다 씀...
        url: CAT_API_URL
      })
        .then(res => {
          // state에 저장될 데이터 전처리
          const payload = {
            id: new Date().getTime(),
            url: res.data[0].url,
            status: 'cat'
          }
          commit('GET_IMAGE', payload)
          commit('SAVE_CAT_IMAGE', payload)

        })
        .catch(err => console.log(err))
    },
    getDogImage({ commit }) {
      axios({
        method:'get',
        // 나중에 프로젝트를 하게 되면... main domain은... 모든 axios에서 다쓴다.
        // http://127.0.0.1:800/api/v1/ -> 이건 모든 경로에서 다 씀...
        url: DOG_API_URL
      })
        .then(res => {
          // state에 저장될 데이터 전처리
          const payload = {
            id: new Date().getTime(),
            url: res.data.message,
            status: 'dog'
          }
          commit('GET_IMAGE', payload)

        })
        .catch(err => console.log(err))
    },
    // changeStatus({ commit }, payload) {
    //   commit('CHANGE_STATUS', payload)
    // }
  },
  modules: {
    CatStore,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
