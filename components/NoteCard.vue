<script lang="ts" setup>
import axios from 'axios';

  interface NoteCardProps{
    Content: string,
    Categories: string[],
    NoteID: string
  }
  const props = defineProps<NoteCardProps>();
  const router = useRouter();
  const deleteNote = (e) => {
    axios.delete(`http://localhost:8080/v1/note/${props.NoteID}`, {headers:{
      token: useCookie("auth").value
    }})
    .then((resp) => {
      window.location.reload()
    })
    .catch((err) => {
      alert(err);
    })
  }
  const moveToNote = (e) => {
    if(e.target.type === undefined) {
      router.push({path: `/note/${props.NoteID}`})
    }
  }
</script>

<template>
  <div class="w-full flex flex-col p-4 sm:p-8 
  justify-between items-center border-solid border-black 
  border-4 drop-shadow-xl bg-white cursor-pointer"
  @click="moveToNote">
    <Button class="absolute top-0 right-0 sm:w-8 sm:p-0 drop-shadow-none bg-blue z-10" text="X" @click="deleteNote"/>
    <p>{{props.Content}}</p>
    <div class="w-full flex flex-col sm:flex-row sm:justify-evenly border-t-4 p-2 border-solid border-black">
      <NoteCategory v-for="category in props.Categories" :Category="category" :isEditable="false"/>
    </div>
  </div>
</template>