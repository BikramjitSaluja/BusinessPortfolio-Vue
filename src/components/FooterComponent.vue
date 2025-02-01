<template>


    <q-footer bordered class="bg-grey-2 text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-text style="font-size: small;">
                    Designed By AMT Solutions LLC - {{ new Date().getFullYear() }}              
                </q-text>
                <!--
                <q-btn flat label="Follow us on facebook" target="_blank" href="https://www.facebook.com/">
                        <q-img src="../assets/images/Facebook_Logo_Primary.jpg" alt="Footer Image"
                            style="height: 20px; width: 20px" />
                            </q-btn>
                            -->
          </q-toolbar-title>

        </q-toolbar>
      </q-footer>   

</template>

<script>

import { defineComponent, ref } from "vue";
import { SOCIALS } from '../utils/constants';

export default defineComponent({
  name: "FooterComponent",
  setup() {
    return {
        socials: ref(SOCIALS),
    }
  },
});

</script>