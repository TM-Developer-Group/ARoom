<template>
  <div class="container-player">
    <div class="player">
      <div class="song_info">
        <div class="song_img">
          <img width="40" height="50" />
        </div>
        <div class="song_text">
          <span class="song_name">Name</span>
          <span class="song_author">Author</span>
        </div>
        <div class="player_button">
          <div class="row justify-content-center align-items-center">
            <div class="col-sm">
              <button type="button" @click="playMusic()">
                <i class="fas fa-backward"></i>
              </button>
            </div>
            <div class="col-sm">
              <button type="button" >
                <i class="fas fa-play"></i>
              </button>
            </div>
            <div class="col-sm">
              <button type="button" >
                <i class="fas fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.container-player {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(14, 14, 14, 0.5);
}
.song_info {
  display: flex;
  float: left;
  margin-left: 220px;
}
.song_text {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  padding-top: 15px;
}
.song_img img {
  border-radius: 10px;
}
.player_button{
    margin-top: 10px;
    margin-left: 20px;
}
.player_button button{
    width: 45px;
    height: 40px;
    background-color: aqua;
    color: black;
}

</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from 'jquery';
 
let currentSong = 0;



@Component
export default class MusicPlayer extends Vue {
  private song = new Audio("./public/bl.mp3");
 
  private playMusic():void{  
 
  }

  private playOrStopMusic(){
    if(this.song.paused){
 
      this.song.play().then(_=>{
        this.song.pause();
      });
    }else{
      this.song.pause();
    }
  }
}
 


</script>