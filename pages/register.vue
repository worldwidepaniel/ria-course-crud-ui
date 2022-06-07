<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  const router = useRouter();
  const data = reactive({
    email: "",
    password: "",
    name: "",
  })
  const error = ref("");
  const sendRegister = () => {
    axios.post('http://localhost:8080/register',data).then((resp) => {
      navigateTo({
        path: "/"
      })
    }).catch((err) => {
      error.value = err.response.data.error.charAt(0).toUpperCase() + err.response.data.error.slice(1);
    })
  }
</script>

<template>
  <div class="w-screen h-screen bg-jonquil p-8 flex flex-col items-center">
    <h1 class="font-bold text-black text-9xl">BrutalNotes</h1>
    <div class="container p-8 flex flex-col items-center">
      <Input class="mt-8" type="email" :value="data.email" @input="(e) => data.email = e.target.value" label="Email"/>
      <Input class="mt-4" type="text" :value="data.name" @input="(e) => data.name = e.target.value" label="Name"/>
      <Input class="mt-4" type="password" :value="data.password" @input="(e) => data.password = e.target.value" label="Password"/>
      <button class="border-solid border-black border-4 
      py-2 px-4 mt-4 bg-blue 
      text-white font-bold"
      @click="sendRegister">
      Register
      </button>
      <span class="font-bold text-red-600">{{error}}</span>
    </div>
  </div>
</template>