<template>
  <Carousel :imgSize="150">
    <div class="carouselCard">
      <img src="../assets/dev-img/1.jpg" />
      <span id="author">Скриптонит</span>
      <span id="title">2004</span>
    </div>
    <div class="carouselCard">
      <img src="../assets/dev-img/2.jpg" />
      <span id="author">Скриптонит</span>
      <span id="title">Дом с нормальными явлениями явлениями</span>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel.vue";

@Component({
  components: {
    MusicNewTab,
    Carousel
  }
})
export default class MusicNewTab extends Vue {}
</script>
