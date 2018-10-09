<template>
  <ul>
    <v-container>
      <!-- <board-list-component></board-list-component> -->
      <board-view-component></board-view-component>
    </v-container>
  </ul>
</template>

<script>
import BoardListComponent from './BoardListComponent'
import BoardViewComponent from './BoardViewComponent'

export default{
  components: {
    BoardListComponent,
    BoardViewComponent
  }
}
</script>
