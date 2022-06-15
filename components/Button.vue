<script lang="ts" setup>
  interface ButtonProps{
    text: string,
  }
  const props = defineProps<ButtonProps>();
</script>

<template>
  <button class="
    w-1/2 sm:w-1/3
    border-solid border-black border-4 
    drop-shadow-xl bg-blue text-white p-3 sm:p-5">
      {{props.text}}
  </button>
</template>