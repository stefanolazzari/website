<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import PrivacyBanner from './components/PrivacyBanner.vue'
import FooterComponent from './components/FooterComponent.vue'


</script>

<template>
  <div class="bg-image-01 animate-colorFade min-h-screen flex flex-col">

    <!-- Banner Privacy sempre visibile sopra -->
    <PrivacyBanner />

    <!-- Header -->
    <HeaderComponent />

    <!-- Contenuto dinamico -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <FooterComponent />

  </div>
</template>
