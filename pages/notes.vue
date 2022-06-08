<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
import debounce from "lodash/debounce";
const searchPhrase = ref("");
const hits = reactive({data: []})

const getHits = debounce(() => {
  axios.get(`http://localhost:8080/v1/search/${searchPhrase.value}`, {
    headers:{
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdEB0ZXN0LnBsIiwidmFsaWRfdG8iOjE2NTQ2ODkwNDZ9.2q5nzQjh_4wnXl_n7tGxk_yeCGrKASJ9QwAA8ssOu7I"
    }
  })
  .then((resp) => {
    hits.data = resp.data
    console.log(hits.data[0])
  })
},500)
</script>

<template>
  <div class="w-screen h-screen bg-jonquil p-8 flex flex-col items-center">
    <h1 class="font-bold text-black text-9xl">BrutalNotes</h1>
    <input type="text" label="" v-model="searchPhrase" @input="getHits"/>
    <ul v-if="hits.data.length > 0" v-for="hit in hits.data">
      <li v-html="hit._formatted.categories[0]"></li>
    </ul>
  </div>
</template>

<style scpoed>
em{
  font-weight: bold;
}
</style>