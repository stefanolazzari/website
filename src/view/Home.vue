<script setup>
import BodyComponent from '../components/BodyComponent.vue'
</script>

<template>
  <BodyComponent>
    <div class="flex flex-col md:flex-row items-start">
      <img 
        src="/src/assets/20220129_221200_2.jpg" 
        alt="Stefano Lazzari" 
        class="w-48 h-auto rounded-lg shadow-md mb-4 md:mr-6 animate-fadeIn"
      />
      <div>
        <p>
          Sono un professionista ICT con esperienza nella formazione informatica, nella consulenza tecnica e nello sviluppo di progetti multimediali interattivi.
          Collaboro con enti di formazione professionale e realtà educative nella progettazione di corsi dedicati alle competenze digitali, allo sviluppo web e alle tecnologie collaborative.
        </p>
        <br>
        <p>
          Il mio percorso formativo e professionale integra competenze trasversali che spaziano dalla gestione di ambienti IT complessi (Google Workspace, Office 365, reti)
          alla progettazione di ambienti immersivi per la stimolazione cognitiva e la riabilitazione tecnologica.
          In particolare, la mia tesi di laurea è stata dedicata allo sviluppo di un ambiente interattivo per persone con disabilità cognitive, utilizzando strumenti come OpenFrameworks, Kinect e Wii.
        </p>
        <br>
        <p class="pb-20">
          La mia principale motivazione è unire tecnologia, creatività e inclusione, sviluppando soluzioni che migliorano l'accessibilità,
          favoriscono l'apprendimento e rispondono ai bisogni concreti delle persone, soprattutto in contesti educativi e clinici.
        </p>
      </div>
    </div>
  </BodyComponent>
</template>

<style scoped>
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
</style>
