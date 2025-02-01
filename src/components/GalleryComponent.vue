
<template>

  <div class="block galleryBlock" style="padding: 10px;">
  
    <h2 class="text-center">Gallery</h2>

    <div class="row">
      <div class="col-12 col-md q-px-md q-pt-md">
        
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" no-native-menu>
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      
      </div>
      <div class="col-12 col-md q-px-md q-pt-md">
        
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      
      </div>
      <div class="col-12 col-md q-px-md q-pt-md">
       
        <q-img src="https://cdn.quasar.dev/img/parallax3.jpg" no-native-menu>
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
     
      </div>
    </div>

    

  </div>
  
</template>
  


<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "GalleryComponent",
 
});

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>