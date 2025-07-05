<template>
  <div>
    <Navbar />
    <section class="py-10 px-4 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-pink-700 mb-6">Galería de Productos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Imágenes con tamaño fijo y aspecto 4:3 -->
        <div class="text-center">
          <img src="/images/alfajores.jpg" alt="Alfajores" class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100"/>
          <p class="mt-2 text-pink-700 font-semibold">Alfajores</p>
        </div>

        <div class="text-center">
          <img src="/images/brownie.jpg" alt="Brownie" class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100" />
          <p class="mt-2 text-pink-700 font-semibold">Brownies</p>
        </div>

        <div class="text-center">
          <img src="/images/G_Red-Velvet.jpg" alt="Red Velvet" class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100" />
          <p class="mt-2 text-pink-700 font-semibold">Red Velvet</p>
        </div>

        <!-- Videos con texto -->
        <div class="text-center">
          <video autoplay loop muted playsinline controls class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100">
            <source src="/images/Carlota-limon.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          <p class="mt-2 text-pink-700 font-semibold">Carlota de Limón</p>
        </div>

        <div class="text-center">
          <video autoplay loop muted playsinline controls class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100">
            <source src="/images/chessecake.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          <p class="mt-2 text-pink-700 font-semibold">Cheesecake</p>
        </div>

        <div class="text-center">
          <video autoplay loop muted playsinline controls class="rounded-lg shadow-lg w-full aspect-[4/3] object-contain bg-red-100"
>
            <source src="/images/Minidonas2.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          <p class="mt-2 text-pink-700 font-semibold">Mini Donas</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>
