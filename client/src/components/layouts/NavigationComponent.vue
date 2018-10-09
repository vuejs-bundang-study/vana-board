<template>
  <v-navigation-drawer
      :value="drawer"
      fixed
      app
    >
    <menu-list-component></menu-list-component>
  </v-navigation-drawer>
</template>
<script>
import MenuListComponent from './MenuListComponent.vue'
export default {
  components: {
    MenuListComponent
  },
  props: ['drawer']
}
</script>
