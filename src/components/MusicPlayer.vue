<template>

  <div class="container-player">
   
  <div class="progress">
    <div class="progress-value"></div>
  </div>
    <div class="player">
      <div class="song_info">
        <div class="song_img">
          <img src="Alb.jpg" width="50" height="50" />
        </div>
          <div class="song_text">
            <span class="song_name">Tom$an </span>
            <span class="song_author">Deracs</span>
          </div>
        </div>
          <div class="player_button">
            <eva-icon id="btn_player" @click="PreviousSong()" width="43" height="43" name="arrow-circle-left" animation="pulse"></eva-icon>
            <eva-icon id="btn_player" @click="playOrStopMusic()" width="50" height="50" name="pause-circle" animation="pulse"></eva-icon>
            <eva-icon id="btn_player" @click="playOrStopMusic()" width="50" height="50" name="play-circle" animation="pulse"></eva-icon>
            <eva-icon id="btn_player" @click="NextSong()"  width="43" height="43" name="arrow-circle-right" animation="pulse"></eva-icon>
            <eva-icon id="btn_player" @click="LoopSong()" width="30" height="30" animation="pulse" name="sync"></eva-icon>
            <eva-icon id="btn_player" name="list"  width="30" height="30" animation="pulse"></eva-icon>
          </div>
        </div>
         <input id="trackBarVolume" class="range blue" type="range" min="0.00" max="1.0" step="0.01" value="0.5" @change="ChangeVolume()"/>
    </div>
 
</template>
<style scoped>

.container-player {
 position: fixed;
 left: 0;
 bottom: 0;
 width: 100%;
 height: 80px;
 background: rgba(14, 14, 14, 0.7);
}
.container-player i{
  color: #fff;
}
.song_info {
  display: flex;
  float: left;
  margin-left: 60px;
 }
.song_text {
  flex-wrap: wrap;
  margin-left: 10px;
  padding-top: 5px;
  color: #fff;
}
.song_img img {
  border-radius: 10px;
}
.player_button{
  margin-top: 5px;
    margin-left: 20px;
    float: left;
}

#btn_player{
  padding-right: 10px;
 margin-top: -8px;
}
@media (min-width: 800px) {
  .player_button{
    display: block;
  }
}

.progress {
  background: rgba(255,255,255,0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 10px;
  width: 100%;
  margin-top: 3px;
  margin-bottom: 5px; 
}

.progress-value {
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 30px;
  
}
@media (max-width: 780px) {
  .container-player{
    height: 120px;
  }
  .player_button{
    margin-right: 102px;
  }
}

@media (max-width: 780px) {
  .player_button{
    margin-left: 70px;
  }
}
 
.range {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 200px;
  transform: translate(-50%, -50%);
  float: right;
  margin-top: 25px;
  margin-right: -80px;  
   
}

input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  background: rgba(59,173,227,1);
  background: -moz-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(59,173,227,1)), color-stop(25%, rgba(87,111,230,1)), color-stop(51%, rgba(152,68,183,1)), color-stop(100%, rgba(255,53,127,1)));
  background: -webkit-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -o-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );
  height: 2px;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-moz-range-track {
  -moz-appearance: none;
  background: rgba(59,173,227,1);
  background: -moz-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(59,173,227,1)), color-stop(25%, rgba(87,111,230,1)), color-stop(51%, rgba(152,68,183,1)), color-stop(100%, rgba(255,53,127,1)));
  background: -webkit-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -o-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );
  height: 2px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  max-width: 80px;
  position: relative;
  bottom: 8px;
  background-color: #1d1c25;
  cursor: -webkit-grab;
  -webkit-transition: border 1000ms ease;
  transition: .6 all;
}

input[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  border: 2px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  max-width: 80px;
  position: relative;
  bottom: 8px;
  background-color: #1d1c25;
  cursor: -moz-grab;
  -moz-transition: border 1000ms ease;
   transition: .6 all;
}
input[type=range]::-webkit-slider-thumb:hover{
  height: 23px;
  width: 23px;
  bottom: 10px;
}
 


.range.blue::-webkit-slider-thumb {
   border-color: rgb(59,173,227);
}

.range.ltpurple::-webkit-slider-thumb {
   border-color: rgb(87,111,230);
}



input[type=range]::-webkit-slider-thumb:active {
  cursor: -webkit-grabbing;
}

input[type=range]::-moz-range-thumb:active {
  cursor: -moz-grabbing;
}

 

 
 
</style>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import $ from 'jquery';
import * as pl from '../script/player';
import   EvaIcons from 'vue-eva-icons';
 
Vue.use(EvaIcons)
let player = new pl.MusicPlayer(['bl.mp3']); 



@Component
export default class MusicPlayer extends Vue {
  
  

  private playOrStopMusic(){
   player.PlayOrPause();
   window.setInterval( ()=>(
     $('.progress-value').css("width",(player.GetSeekSong()*100/player.GetDurationSong())+"%")
   ),1000);

    let el = $('[name="pause-circle"]').attr("name","play-circle");
    
  }
  private NextSong(){
    player.NextSound();
  }
  private PreviousSong(){
    player.PrevSound();
  }
  private VolumeUp(){
    player.PlusVolume();
  }
  private VolumeDown(){
    player.MinusVolume();
  }
  private LoopSong(){
    player.LoopSong();
  }
  private ChangeVolume(){
    const field = document.getElementById('trackBarVolume') as HTMLInputElement;
    player.SetVolume(field.value);
  }
}
 
</script>