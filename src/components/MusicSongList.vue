<template>
  <div class="table-host">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Duration</th>
          <th scope="col">Artist</th>
          <th scope="col">Album</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in songList" :key="item.id">
          <td>{{item.song.name}}</td>
          <td>{{item.song.duration}}</td>
          <td>{{item.artist.name}}</td>
          <td>{{item.song.album.name}}</td>
          <td>{{item.song.genre}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class MusicSongList extends Vue {
  @Prop() private songList!: Array<any>;
}
</script>

<style scoped>
.table-host {
  border-radius: 5px;
  border: 1px solid rgb(222, 226, 230);
  overflow: hidden;
}

table {
  font-size: 9pt;
  margin-bottom: 0;
}

th, td {
  padding: 0.25rem !important;
  border: none;
}

td:nth-child(2) {
  text-align: right;
}

</style>
