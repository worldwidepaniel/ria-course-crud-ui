<script lang="ts" setup>
  interface InputProps{
    label: string,
    type: string,
    value: string
  }
  const props = defineProps<InputProps>();
</script>

<template>
  <label class="flex flex-col items-center sm:text-xl sm:w-1/2">
    {{props.label}}
    <input :type="props.type" :value="props.value" @input="$emit('input',$event)" class="border-solid border-black border-4 drop-shadow-xl p-3 w-full"/>
  </label>
</template>