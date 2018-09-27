<template>
  <ul>
    <v-container>
      <board-list-component></board-list-component>
    </v-container>
  </ul>
</template>

<script>
import BoardListComponent from './BoardListComponent'

export default{
  components: {
    BoardListComponent
  }
}
</script>
