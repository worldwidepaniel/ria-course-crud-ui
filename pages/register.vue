<script lang="ts" setup>
import axios from 'axios';
import { reactive } from 'vue';

const credentials = reactive({
  email:"",
  name:"",
  password:""
})
const cookie = useCookie("auth", {maxAge:3600})
const router = useRouter();

const sendLogin = () => {
  axios.post("http://localhost:8080/register",credentials)
  .then((resp) => {
    router.push({path: "/"})
  }).catch((err) => {
    alert(err);
  })
}
</script>
<template>
  <NuxtLayout name="main">
    <Input type="email" :value="credentials.email" label="Email" @input="(e) => credentials.email = e.target.value"/>
    <Input type="text" :value="credentials.name" label="Name" @input="(e) => credentials.name = e.target.value" />
    <Input type="password" :value="credentials.password" label="Password" @input="(e) => credentials.password = e.target.value" />
    <Button text="Register" />
  </NuxtLayout>
</template>