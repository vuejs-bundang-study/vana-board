<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <!-- ...text -->
          <board-component :items = "items"></board-component>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>

import BoardComponent from '../board/BoardComponent.vue'

export default {
  components: {
    BoardComponent
  }
}
</script>
