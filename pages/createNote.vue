<script lang="ts" setup>
  import { reactive } from 'vue';
  import axios from 'axios';

  definePageMeta({
    middleware:["auth"]
  })

  const note = reactive({
    data: {
      content: "",
      categories: []
    }
  });
  const router = useRouter();

  const createNote = () => {
    axios.post(`http://localhost:8080/v1/note`,note.data, {headers:{
      token: useCookie("auth").value
    }})
    .then((resp) => {
      router.push({path:`/notes/`})
    })
    .catch((err) => {
      alert(err);
    })
  }

  const modifyNoteInput = (e, index) => {
    note.data.categories[index] = e.target.value
  }

</script>
<template>
<NuxtLayout name="main">
  <textarea v-model="note.data.content" class="w-full h-1/2 mt-4 sm:mt-0 border-solid border-black border-4 drop-shadow-xl bg-white">
    {{note.data.content}}
  </textarea>
  <div class="flex flex-row justify-around w-full">
    <NoteCategory class="p-4" v-for="(category,index) in note.data.categories" :Category="category" @input="(e) => modifyNoteInput(e,index)" :isEditable="true" />
  </div>
  <Button text="Dodaj kategorie" @click="note.data.categories.push('nowa kategoria')"></Button>
  <Button text="Stwórz notatkę!" @click="createNote"/>
</NuxtLayout>
</template>