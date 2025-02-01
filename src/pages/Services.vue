
<template>

  <div >
    <img src="../assets/images/aboutusbanner.jpg"/>
  </div>

  <div class="block galleryBlock" style="padding: 40px;">
    <h2 class="text-center">Our Services</h2>

    <div class="q-pa-md">
    <div>
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab name="grazing" label="Custom Grazing"/>
        <q-tab name="catering" label="Catering & Styling" />
        <q-tab name="occasion" label="Special Occasions" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="bg-purple text-white text-center"
        >
          <q-tab-panel name="grazing">
            <div class="text-h6">
              Personalized Grazing Tables. Fully customized themes, color palettes,
              and dietary preferences.
            </div>
            
          </q-tab-panel>

          <q-tab-panel name="catering">
            <div class="text-h6">
              Full-Service Grazing Table Setup & Styling - Includes on-site assembly, decor
              elements, and floral arrangements.
            </div>
          </q-tab-panel>

          <q-tab-panel name="occasion">
            <div class="text-h6">
              Special Ocassion & Holiday Pre-Orders - Seasonal grazing boards for festive
              occasions and gifting.
            </div>
            
          </q-tab-panel>
        </q-tab-panels>

        
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
          class="bg-orange text-white text-center"
        >
          <q-tab-panel name="grazing">
            <div class="text-h6">
              Luxury Grazing Boards & Boxes - Individually curated boards or boxes for 
              smaller events, gifts, or corporate orders.
            </div>
          </q-tab-panel>

          <q-tab-panel name="catering">
            <div class="text-h6">
              Brunch & Breakfast Grazing - Featuring pastries, fresh fruit, yogurt parfaits,
              and gourmet coffee pairings.
            </div>
          </q-tab-panel>

          <q-tab-panel name="occasion">
            <div class="text-h6">
              Dessert & Sweet Grazing Tables - Featuring chocolates, pastries, and gourmet.
            </div>
            
          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-teal text-white text-center"
        >
          <q-tab-panel name="grazing">
            <div class="text-h6">
              Mini Grazing Cups & Cones - Perfect for cocktail parties and social events
              with grab-and-go options.
            </div>
          </q-tab-panel>

          <q-tab-panel name="catering">
            <div class="text-h6">
              Themed & Seasonal Grazing Displays - Holiday-inspired, bridal shower, baby shower,
              or corporate branding themes.
            </div>
          </q-tab-panel>

          <!--
          <q-tab-panel name="occasion">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem.
          </q-tab-panel>
          -->

        </q-tab-panels>

        

      </div>
    </div>
  </div>

  </div>

  
</template>


<script>
import { defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "ServicesPage",
  
  setup () {
    return {
      tab: ref('grazing')
    }
  }
});
</script>