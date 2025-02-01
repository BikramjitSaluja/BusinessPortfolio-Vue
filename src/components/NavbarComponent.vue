<template>

    <q-toolbar class="text-primary" style="padding: 50px;">
      
      <q-toolbar-title>       
        <q-img src="../assets/images/SmallLogo1.jpg"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </q-toolbar-title>

      <q-toolbar-items class="gt-sm">

        <q-btn flat>
          <RouterLink to="/">
            Home
          </RouterLink>       
        </q-btn>
        <q-btn flat>
          <RouterLink to="/aboutus">
            About Us
          </RouterLink>         
        </q-btn>
        <q-btn flat>
          <RouterLink to="/services">
            Services
          </RouterLink>         
        </q-btn>
        <q-btn flat>
          <RouterLink to="/menu">
            Menu
          </RouterLink>   
        </q-btn>
        <q-btn flat>
          <RouterLink to="/faq">
            FAQ
          </RouterLink>
        </q-btn>
        <q-btn flat>
          <RouterLink to="/contact">
            Contact Us
          </RouterLink>
        </q-btn>

      </q-toolbar-items>


      <div class="lt-md">

        <q-btn color="dark" icon="menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/">
                  Home
                </RouterLink>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/aboutus">
                  About Us
                </RouterLink> 
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/services">
                  Services
                </RouterLink>  
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/menu">
                  Menu
                </RouterLink> 
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/faq">
                  FAQ
                </RouterLink>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>
                <RouterLink to="/contact">
                  Contact Us
                </RouterLink>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

        <!--
        <q-btn flat round dense icon="menu" 
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu" />
     
      -->
      
      
      
    </div>

    </q-toolbar>

</template>

<script>


import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    RouterLink,
  },
  setup () {
    return {
      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  }
});

</script>