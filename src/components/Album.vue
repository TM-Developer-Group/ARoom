<template>
  <div>
    <div class="album-bg">
      <!-- TODO: Change src -->
      <img src="../assets/dev-img/3.jpg" />
    </div>
    <div class="album-img">
      <!-- TODO: Change src -->
      <img src="../assets/dev-img/3.jpg" />
      <div class="label-block">
        <span>Праздник на улице 36</span>
        <!-- TODO: router-link -->
        <span>Скриптонит</span>
      </div>
    </div>
    <TrackList :tracks="getSongList()"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MusicTrackList from "@/components/MusicTrackList.vue";
import TrackList from "@/components/TarckList.vue";
import $ from "jquery";

@Component({
  components: {
    MusicTrackList,
    Album,
    TrackList
  }
})
export default class Album extends Vue {
  getSongList(): any[] {
    return [
      { label: "Капли вниз по бёдрам" },
      { label: "Напомни" },
      { label: "104 (Скит)" },
      { label: "Цепи" },
      { label: "Точно не нужно новых" },
      { label: "Поворот" },
      { label: "Первый" },
      { label: "Ага, ну" },
      { label: "Вечеринка" },
      { label: "Не забирай меня с пати" },
      { label: "Темно" },
      { label: "Оставь их" },
      { label: "Outro" }
    ];
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
