<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import axios from 'axios';

  definePageMeta({
    middleware:["auth"]
  })

  const note = reactive({
    data: {}
  });
  const route = useRoute();
  const router = useRouter();

  const modifyNote = () => {
    axios.patch(`http://localhost:8080/v1/note/${note.data.Note_ID}`,note.data, {headers:{
      token: useCookie("auth").value
    }})
    .then((resp) => {
      router.push({path:`/note/${route.params.id}`})
    })
    .catch((err) => {
      alert(err);
    })
  }

  const modifyNoteInput = (e, index) => {
    note.data.categories[index] = e.target.value
  }

  onMounted(() => {
    axios.get(`http://localhost:8080/v1/note/${route.params.id}`,{headers: {
      token: useCookie("auth").value
    }})
    .then((resp) => {
      note.data = resp.data
    })
    .catch((err) => {
      console.log(err);
    })
  })

</script>
<template>
<NuxtLayout name="main">
  <div class="flex flex-col p-4 items-center mt-4 sm:mt-0 border-solid border-black border-4 drop-shadow-xl bg-white">
    {{new Date(note.data.creation_date * 1000).toLocaleString()}}
  </div>
  <textarea v-model="note.data.content" class="w-full h-1/2 mt-4 sm:mt-0 border-solid border-black border-4 drop-shadow-xl bg-white">
    {{note.data.content}}
  </textarea>
  <div class="flex flex-row justify-around w-full">
    <NoteCategory class="p-4" v-for="(category,index) in note.data.categories" :Category="category" @input="(e) => modifyNoteInput(e,index)" :isEditable="true" />
  </div>
  <Button text="Dodaj kategorie" @click="note.data.categories.push('nowa kategoria')"></Button>
  <Button text="Modyfikuj" @click="modifyNote"/>
</NuxtLayout>
</template>