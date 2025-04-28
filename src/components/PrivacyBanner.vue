<template>
    <div v-if="isVisible" class="privacy-banner">
      <p>
        Questo sito non utilizza cookie per raccogliere dati personali.
      </p>
      <button @click="closeBanner" class="close-btn">×</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Stato per la visibilità del banner
  const isVisible = ref(true);
  
  // Al momento del montaggio del componente, controlliamo se l'utente ha già chiuso il banner
  onMounted(() => {
    const closedBanner = localStorage.getItem("closedBanner");
    if (closedBanner === "true") {
      isVisible.value = false;
    }
  });
  
  // Funzione per chiudere il banner con la X
  const closeBanner = () => {
    localStorage.setItem("closedBanner", "true");  // Memorizziamo nel localStorage che il banner è stato chiuso
    isVisible.value = false;
  };
  </script>
  
  <style scoped>

  </style>
  