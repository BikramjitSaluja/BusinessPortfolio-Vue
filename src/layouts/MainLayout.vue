<template>
  
  <q-layout view="lHh Lpr lFf">
    
    <NavbarComponent/>

    <!--
    <HeroComponent/>
    <GalleryComponent/>
    -->
    
    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent/>

  </q-layout>
</template>

<script>

import { defineComponent } from "vue";
import NavbarComponent from "../components/NavbarComponent.vue"
//import HeroComponent from "src/components/HeroComponent.vue";
//import GalleryComponent from "src/components/GalleryComponent.vue";
import FooterComponent from "src/components/FooterComponent.vue";


export default defineComponent({
  name: "MainLayout",

  components: {
    NavbarComponent,
    //HeroComponent,
    //GalleryComponent,
    FooterComponent
  },
});

</script>
