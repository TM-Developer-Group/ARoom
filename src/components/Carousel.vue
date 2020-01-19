<template>
  <div>
    <div class="carousel d-flex justify-content-center">
      <img class="move" src="../assets/dev-img/1.jpg" />
      <img class="move" src="../assets/dev-img/2.jpg" />
      <img class="move" src="../assets/dev-img/3.jpg" />
      <img class="move" src="../assets/dev-img/4.jpg" />
      <img class="move" src="../assets/dev-img/5.jpg" />
    </div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";
@Component
export default class Carousel extends Vue {
  mounted() {
    this.init();
  }

  private init(): void {
    var carousel = this;
    var isAnimationActive = false;

    $(".move").on("transitionend", function() {
      isAnimationActive = false;
    });

    $(".carousel").on("wheel", function(e) {
      var event = e.originalEvent as WheelEvent;
      var imgs = $(".carousel img").toArray();
      //window.console.log(event.deltaY);
      if (!isAnimationActive) {
        {
          if (event.deltaY < 0) carousel.changeCard(imgs, 220);
          else carousel.changeCard(imgs, -220);
        }
        isAnimationActive = true;
      }
      return false;
    });
  }

  private changeCard(cards: HTMLElement[], offset: number): void {
    cards.forEach(item => {
      $(item).css("left", parseInt($(item).css("left"), 10) + offset);
    });
  }

  private swapCard(cards: HTMLElement[], diraction: boolean) {}
}
</script>

<style scoped>
.carousel img {
  position: relative;
  left: 0px;
  width: 200px;
  height: 200px;
  margin: 0 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.move {
  transition: left 10 0ms;
}
</style>
