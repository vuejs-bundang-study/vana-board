<template>
  <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>VANA BOARD</v-toolbar-title>
    </v-toolbar>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters({
    drawer: 'drawer'
  }),
  methods: mapActions(['changeDrawer'])
}
</script>
