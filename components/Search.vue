<script lang="ts" setup>
import {ref, reactive} from 'vue';
import debounce from 'lodash/debounce';
import axios from 'axios';
  
  const phrase = ref("")
  const isOpen = ref(false)
  const router = useRouter();
  const data = reactive({
    hits: []
  })

  const getHits = debounce(() => {
    if(phrase.value === ""){
      data.hits=[]
      return
    }
    axios.get(`http://localhost:8080/v1/search/${phrase.value}`,{headers:{
      token: useCookie("auth").value
    }}).then((resp) => {
      resp.data.forEach(hit => {
        data.hits.push(hit._formatted)
      });
    })
  },300)

  const closeModal = debounce(()=> {
    isOpen.value = false
  },200)
  const navigateTo = (e, Note_ID) => {
    console.log(e)
    router.push({path: `/note/${Note_ID}`})
  }
</script>

<template>
   <input v-model="phrase" @input="getHits" @focus="isOpen = true" @blur="closeModal"
   class="border-solid border-black border-4 drop-shadow-xl p-3" />
   <div class="overflow-auto flex flex-col justify-evenly items-center p-8" v-if="isOpen">
    <div class="w-full mt-8 p-4 cursor-pointer bg-white border-solid border-4 border-black drop-shadow-xl flex flex-col"
     v-for="hit in data.hits"
     @click="navigateTo(e,hit.Note_ID)">
      <span v-html="hit.content"></span>
      <small v-html="'Kategorie: '+hit.categories"></small>
    </div>
   </div>
</template>