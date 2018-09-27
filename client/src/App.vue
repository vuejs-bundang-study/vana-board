<template>
  <div id="app">
    <v-app>
      <login-component></login-component>
      <!--<home-component></home-component>-->
    </v-app>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/login/LoginComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent,
    LoginComponent
  }
}
</script>
