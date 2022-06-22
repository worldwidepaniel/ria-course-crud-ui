<script lang="ts" setup>
import axios from 'axios';
import { reactive } from 'vue';

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const credentials = reactive({
  email:"",
  name:"",
  password:""
})

const router = useRouter();

const sendRegister = () => {
  if (!credentials.email.match(mailRegex)){
    alert("Nie poprawny adres email!")
    return;
  }
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
    <Button text="Register" @click="sendRegister"/>
  </NuxtLayout>
</template>