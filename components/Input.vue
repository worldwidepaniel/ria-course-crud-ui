<script lang="ts" setup>
  interface InputProps {
    type: string,
    label: string,
    value: string,
  }
  const props = defineProps<InputProps>();
</script>

<template>
  <label class="flex flex-col items-center text-2xl">
    {{props.label}}
    <input :type=props.type :value="props.value" @input="$emit('input',$event)" class="block border-solid border-4 border-black bg-white drop-shadow-xl" />
  </label>
</template>