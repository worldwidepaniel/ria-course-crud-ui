<script lang="ts" setup>
  import {ref} from 'vue';
  interface NoteCategoryProps{
    Category: string,
    isEditable: boolean
  }
  const props = defineProps<NoteCategoryProps>();
  const edit = ref(false);

  const vFocus = {
    mounted: (el) => el.focus()
  }

</script>

<template>
  <div class="flex flex-col items-center mt-4 sm:mt-0 px-4 border-solid 
  border-black border-4 drop-shadow-xl bg-white cursor-pointer" 
  @click="() => {edit = true}">
    <input type="text" v-if="edit && isEditable" 
    @input="$emit('input',$event)"
    @blur="edit = false"
    v-focus />
    <label v-else="">{{props.Category}}</label>
  </div>
</template>