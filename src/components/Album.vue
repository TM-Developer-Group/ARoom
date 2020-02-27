<template>
  <div>
    <div class="album-bg">
      <!-- TODO: Change src -->
      <img/>
    </div>
    <div class="album-img">
      <!-- TODO: Change src -->
      <img/>
      <div class="label-block">
        <span>{{album.name}}</span>
        <!-- TODO: router-link -->
        <span>{{album.artist}}</span>
      </div>
    </div>
    <TrackList :tracks="tracks"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MusicTrackList from "@/components/MusicTrackList.vue";
import TrackList from "@/components/TarckList.vue";
import { MediaHelper, Artist, Track, Album } from "@/script/mediaManager";
import { AudioSearch } from "@/script/audioSearch";
import $ from "jquery";

@Component({
  components: {
    MusicTrackList,
    AlbumComponent,
    TrackList
  }
})
export default class AlbumComponent extends Vue {
  @Prop() artistName!:string;
  @Prop() albumName!:string;
  album:Album = new Album();
  tracks:Track[] = new Array<Track>();
  img!:any;

  mounted(){
    var audioSearch = new AudioSearch();
    window.console.log(this.album);
    audioSearch.findAlbum(this.artistName, this.albumName).then(data => {
      this.album = data;
      this.tracks = data.tracks;
      MediaHelper.convertToTrack(data.tracks[0]).getImg().then(data => {
        window.console.log(data);
        if(data !== undefined){
          $('.album-img img').attr('src', `data:${data[0].format};base64,${data[0].data.toString('base64')}`)
          $('.album-bg img').attr('src', `data:${data[0].format};base64,${data[0].data.toString('base64')}`)
        }          
      });
    })
  }
}
</script>

<style scoped>
img {
  pointer-events: none;
}

.album-bg {
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: black;
}

.album-img {
  display: flex;
  justify-content: start;
  padding-bottom: 30px;
}

.album-bg img {
  position: relative;
  align-self: center;
  filter: blur(15px);
  width: 100%;
}

.album-img img {
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: 100px;
  z-index: 20;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
}

.album-img .label {
  align-self: center;
  margin-left: 10px;
}

.label-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.label-block span:first-child {
  font-weight: bold;
  font-size: 20pt;
}

.list-group {
  padding-bottom: 40px;
}
</style>
