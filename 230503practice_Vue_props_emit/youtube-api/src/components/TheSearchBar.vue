<template>
  <div id='thesearchbar'>
    <input type="text" v-model="searchData" @keydown.enter="onSearchData">
  </div>
</template>

<script>
export default {
    name: 'TheSearchBar',
    data() {
        return {
            searchData: '',
        }
    },
    methods: {
        onSearchData() {
            this.$emit('search-input-data', this.searchData)
        },
    }
}
</script>

<style>

</style>