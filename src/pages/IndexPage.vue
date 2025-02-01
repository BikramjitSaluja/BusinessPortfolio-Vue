<template>

  <!--
  <q-page class="flex flex-center">
    
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
     
  </q-page>
  --> 

  <q-layout view="lHh Lpr lFf">
    
    <div>
      <img src="../assets/images/aboutusbanner.jpg"/>
    </div>

    <div>
      <HeroComponent/>
      <GalleryComponent/>
      
    </div>
     
  </q-layout>
  

</template>

<script>

import { defineComponent } from "vue";
//import NavbarComponent from "../components/NavbarComponent.vue"
import HeroComponent from "src/components/HeroComponent.vue";
import GalleryComponent from "src/components/GalleryComponent.vue";
//import FooterComponent from "src/components/FooterComponent.vue";


export default defineComponent({
  name: "IndexPage",

  components: {
    //NavbarComponent,
    HeroComponent,
    GalleryComponent,
    //FooterComponent
  },
});

</script>
