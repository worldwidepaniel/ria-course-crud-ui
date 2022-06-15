<script lang="ts" setup>
  const route = useRoute();
</script>

<template>
  <div class="w-100 h-screen bg-jonquil flex flex-col items-center justify-evenly">
    <h1 class="text-4 text-5xl font-bold">BrutalNotes</h1>
    <Search v-if="route.meta.middleware !== undefined" />
    <div class="w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 sm:p-4 lg:p-8 flex flex-col items-center justify-evenly bg-white border-solid border-4 border-black drop-shadow-xl">
      <slot />
    </div>
  </div>
</template>
