<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import PrivacyBanner from './components/PrivacyBanner.vue';

//import SideComponent from './components/SideComponent.vue'

import FooterComponent from './components/FooterComponent.vue'


</script>


<template>
  <div class="bg-image-01">

    <div id="app">
      <PrivacyBanner></PrivacyBanner>
    </div>
      <body>
        <HeaderComponent></HeaderComponent>
        <div>
          <router-view></router-view>
        </div>
        
      </body>
    



  </div>
</template>
