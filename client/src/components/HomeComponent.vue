<template>
  <v-app id="inspire">
    <navigation-component></navigation-component>
    <tool-bar-component></tool-bar-component>
    <content-component></content-component>
    <div><h1>test{{userName}}</h1></div>
    <footer-component></footer-component>
  </v-app>
</template>
<script>
import NavigationComponent from './layouts/NavigationComponent.vue'
import ToolBarComponent from './layouts/ToolBarComponent.vue'
import ContentComponent from './layouts/ContentComponent.vue'
import FooterComponent from './layouts/FooterComponent.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    NavigationComponent,
    ToolBarComponent,
    ContentComponent,
    FooterComponent
  },
  computed: mapState({
    userName: state => state.home.userName
  }),
  methods: mapActions('home', [
    'getUser'
  ]),
  created () {
    this.getUser()
  }
}
</script>
