<template>
  <Carousel />
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
