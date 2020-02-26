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
        <tr v-for="item in trackList" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{toSec(item.duration)}}</td>
          <td>{{item.artist}}</td>
          <td>{{item.album}}</td>
          <td>{{item.genre.toString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MediaManager, Artist, Album, Track } from "@/script/mediaManager";
@Component
export default class MusicTrackList extends Vue {
  @Prop() private trackList!: Array<Track>;
  
  mediaManager = new MediaManager();

  toSec(duration: number) {
    return Math.floor(duration / 60) + ":" + ((Math.round(duration % 60) < 10)
      ? "0" + Math.round(duration % 60)
      : Math.round(duration % 60));
  }
  

  mounted(){
    window.console.log(this.trackList)
    if(this.trackList === undefined){
      this.mediaManager.getTracksFromDb().then(data => {
        this.trackList = data;
      })
    }
  }
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
  table-layout: fixed;
}

th,
td {
  padding: 0.25rem !important;
  border: none;
}

td:nth-child(2) {
  text-align: right;
}

td {
  white-space: nowrap;
  overflow: hidden;
}
</style>
