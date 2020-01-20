<template>
  <Carousel>
    <img id="first" src="../assets/dev-img/1.jpg" />
      <img src="../assets/dev-img/2.jpg" />
      <img src="../assets/dev-img/3.jpg" />
      <img src="../assets/dev-img/4.jpg" />
      <img src="../assets/dev-img/3.jpg" />
      <img src="../assets/dev-img/2.jpg" />
      <img id="last" src="../assets/dev-img/5.jpg" />
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
