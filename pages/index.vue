<script lang="ts" setup>
import axios from 'axios';
import { reactive } from 'vue';

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const credentials = reactive({
  email:"",
  password:""
})
const cookie = useCookie("auth", {maxAge:3600})
const router = useRouter();

const sendLogin = () => {
  if (!credentials.email.match(mailRegex)){
    alert("Nie poprawny adres email!")
    return;
  }
  axios.post("http://localhost:8080/login",credentials)
  .then((resp) => {
    cookie.value = resp.data.token
    router.push({path: "/notes"})
  }).catch((err) => {
    alert(err);
  })
}
</script>

<template>
  <NuxtLayout name="main">
    <Input type="email" :value="credentials.email" label="Email" @input="(e) => credentials.email = e.target.value"/>
    <Input type="password" :value="credentials.password" label="Password" @input="(e) => credentials.password = e.target.value" />
    <Button text="Login" @click="sendLogin"/>
    <span class="text-gray cursor-pointer" @click="router.push({path:'/register'})">Nie masz konta? Kliknij tutaj!</span>
  </NuxtLayout>
</template>