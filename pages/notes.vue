<script lang="ts" setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

  definePageMeta({
    middleware:["auth"]
  })

  const data = reactive({
    notes: []
  })
  const router = useRouter();
  const route = useRoute();
  const pagination = ref(0);
  const offset = ref(0);
  onMounted(() => {
    axios.get(`http://localhost:8080/v1/notes?&offset=${offset.value}`,{headers: {
      token: useCookie("auth").value
    }})
    .then((resp) => {
      data.notes = resp.data
    })
    .catch((err) => {
      alert(err);
    })
    
    axios.get(`http://localhost:8080/v1/countNotes`,{headers: {
      token: useCookie("auth").value
    }})
    .then((resp) => {
      pagination.value = Math.floor(resp.data["document-count"])
    })
    .catch((err) => {
      alert(err);
    })
  })
 
 watch(offset, (newOffset) => {
  axios.get(`http://localhost:8080/v1/notes?&offset=${newOffset}`,{headers: {
      token: useCookie("auth").value
    }})
    .then((resp) => {
      data.notes = resp.data
    })
    .catch((err) => {
      alert(err);
    })
 })
  const changePage = (val) => {
    offset.value += val
  }

    const logout = () => {
    document.cookie = "auth=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
    router.push({path: "/"})
  }
</script>

<template>
  <NuxtLayout name="main">
    <div class="flex flex-row justify-center w-full">
      <Button text="Wyloguj się" @click="logout" />
      <Button text="Dodaj notatke" @click="() => router.push({path:'/createNote'})"/>
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
      <NoteCard v-for="note in data.notes" :Content="note.content" :Categories="note.categories" :NoteID="note.Note_ID" isEditable="false" />
    </div>
    <div class="w-full flex flex-row justify-center">
      <Button v-if="offset > 0" text="&lt;" @click="changePage(-4)"/>
      <Button v-if="offset+4 < pagination" text="&gt;" @click="changePage(4)" />
    </div>
  </NuxtLayout>
</template>