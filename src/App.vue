<script setup>
import HeaderComponent from './components/HeaderComponent.vue' 

//import SideComponent from './components/SideComponent.vue'
 // import FooterComponent from './components/HeaderComponent.vue'


</script>


<template>
  <div class="bg-image-01">

    <body>
      <HeaderComponent></HeaderComponent>
      <div>
        <router-view ></router-view>
      </div>
      <Footer-component></Footer-component>
    </body>

  </div>
</template>

