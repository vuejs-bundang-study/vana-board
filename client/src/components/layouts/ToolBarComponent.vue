<template>
  <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click="changeDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>VANA BOARD</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon v-if="!isLogined" @click="goLogin()">
      <v-icon>assignment_ind</v-icon>
    </v-btn>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    changeDrawer: function () {
      this.$emit('changeDrawer')
    },
    goLogin: function () {
      this.$router.replace('login');
    },
  },
  data() {
    return {
      isLogined: false,
    }
  }
}
</script>
