<template>
  <div class="w-screen h-screen bg-jonquil p-8 flex flex-col items-center">
    <h1 class="font-bold text-black text-9xl">BrutalNotes</h1>
    <ais-instant-search :search-client="searchClient" index-name="notes">
      <ais-search-box />
      <ais-hits>
        <template v-slot:item="{ item }">
          <h2>{{ item.content }}</h2>
        </template>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>


<script setup lang="ts">
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
const searchClient = instantMeiliSearch(
        "http://localhost:7700",
        "testowankoooo"
      )
</script>