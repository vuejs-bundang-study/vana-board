<template>
  <v-app id="inspire">
    <navigation-component></navigation-component>
    <tool-bar-component></tool-bar-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </v-app>
</template>
<script>
import NavigationComponent from './layouts/NavigationComponent.vue'
import ToolBarComponent from './layouts/ToolBarComponent.vue'
import ContentComponent from './layouts/ContentComponent.vue'
import FooterComponent from './layouts/FooterComponent.vue'
export default {
  components: {
    NavigationComponent,
    ToolBarComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>
