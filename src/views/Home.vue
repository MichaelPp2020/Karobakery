<template>
  <div>
    <Navbar />
    <section class="text-center py-10 bg-pink-50 animate-fade">
      <h2 class="text-4xl font-bold text-pink-700">¡Bienvenido a Karobakery!</h2>
      <p class="mt-4 text-lg text-gray-600">
        Postres deliciosos dónde en cada bocado encontrarás una experiencia de amor y sabor. 🍩🍰✨
      </p>
      <p class="mt-4 max-w-2xl mx-auto text-md text-gray-700">
        En Karobakery, cada postre es una obra de arte, hecho con ingredientes frescos y mucho cariño. Desde
        cupcakes esponjosos hasta brownies , tenemos algo para todos los gustos. ¡Descubre nuestra
        galería de productos y déjate llevar por la dulzura!  
      </p>

      <div class="mt-8">
        <img
          src="/images/karobakery-logo.jpg"
          alt="Karobakery Logo"
          class="mx-auto w-48 h-48 rounded-full shadow-lg animate-float transition-transform duration-500 hover:scale-110"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-fade {
  animation: fade 0.8s ease-in-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

</style>
