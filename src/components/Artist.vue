<template>
  <div>
    <div class="d-flex flex-column justify-content-start align-items-center">
      <div class="artist-img rounded-circle d-flex align-items-center">
        <img src="../assets/dev-img/artist.jpg" />
      </div>
      <div class="text-center">
        <h1>Скриптонит</h1>
        <h5>Адиль Жалелов</h5>
      </div>
    </div>
    <div class="mt-5">
      <h5>Альбомы</h5>
      <Carousel class="mt-4" :imgSize="150">
        <div class="carouselCard">
          <img src="../assets/dev-img/1.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">2004</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/2.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Дом с нормальными явлениями</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/3.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Праздник на улице 36</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/3.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Праздник на улице 36</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/4.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Уроборос: Зеркала</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/5.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Уроборос: Улица 36</span>
        </div>
        <div class="carouselCard">
          <img src="../assets/dev-img/3.jpg" />
          <span id="author">Скриптонит</span>
          <span id="title">Праздник на улице 36</span>
        </div>
      </Carousel>
    </div>
    <div class="mt-5">
      <h5>Треки</h5>
      <TrackList :tracks="getSongList()"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel.vue";
import TrackList from "@/components/TarckList.vue";
import $ from "jquery";
@Component({
  components: {
    Artist,
    Carousel,
    TrackList
  }
})
export default class Artist extends Vue {
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

.artist-img {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.artist-img img {
  width: 200px;
}

.list-group {
  padding-bottom: 40px;
}
</style>
