export default {
  state: {
    onlyCatImages: []
  },
  mutations: {
    SAVE_CAT_IMAGE(state, payload) {
      state.onlyCatImages.push(payload)
    }
  }
}