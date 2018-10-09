<template>
  <v-app id="inspire">
    <navigation-component :drawer="drawer"></navigation-component>
    <tool-bar-component @changeDrawer="changeDrawer"></tool-bar-component>
    <content-component></content-component>
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
  methods: {
    changeDrawer: function () {
      this.drawer = !this.drawer
    },
    ...mapActions('home', ['getUser'])
  },
  mounted () {
    this.getUser()
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
