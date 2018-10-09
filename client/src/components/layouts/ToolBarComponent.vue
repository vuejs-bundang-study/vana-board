<template>
  <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click="changeDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>VANA BOARD</v-toolbar-title>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    changeDrawer: function () {
      this.$emit('changeDrawer')
    }
  }
}
</script>
