<template>
  <nav class="bg-pink-200 p-4 flex justify-between items-center shadow">
   <h1><RouterLink to="/" class="text-2xl font-bold text-pink-800">Karobakery</RouterLink></h1> 

    <div class="space-x-4">
      <RouterLink to="/" class="text-pink-700 hover:underline">Inicio</RouterLink>
      <RouterLink to="/galeria" class="text-pink-700 hover:underline">Galería</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
