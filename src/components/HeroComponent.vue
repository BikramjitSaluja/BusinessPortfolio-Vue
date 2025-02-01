<template>
    
    <div style="padding: 40px;">     
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
    >
    <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">First stop</div>
          <!--<div class="text-subtitle1">Mountains</div>-->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Second stop</div>
          <!--<div class="text-subtitle1">Famous City</div>-->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Third stop</div>
          <!--<div class="text-subtitle1">Famous Bridge</div>-->
        </div>
      </q-carousel-slide>
      
    </q-carousel>
  </div>
</template>
  


<script>
import { defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "HeroComponent",

  setup () {
    return {
      slide: ref('first')
    }
  }

});

</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>