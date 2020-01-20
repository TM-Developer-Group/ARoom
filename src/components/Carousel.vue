<template>
  <div>
    <div class="carousel d-flex justify-content-center">
      <slot></slot>
    </div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";

// TODO: Add MouseWheel card change.
// FIXME: Fix bug with highspeed rotation

@Component
export default class Carousel extends Vue {
  private cardFullWidth: number = 0;
  private cardCount: number = 0;

  mounted() {
    this.init();
  }

  private init(): void {
    let cards: HTMLElement[] = $(".carousel img").toArray();
    let carouselClass = this;
    let startPointX: number = 0;
    let currentLeft: number = 0;
    let mouseOffset: number = 0;
    let counter: number = 0;

    this.cardCount = $('.carousel img').length;
    this.cardFullWidth =
      ($(".carousel img").width() as number) +
      parseInt($(".carousel img").css("margin-left"), 10) +
      parseInt($(".carousel img").css("margin-right"), 10);

    cards.forEach(item => {
      this.setOpacity(item);
    });

    $(".carousel").mousedown(function(e) {
      startPointX = e.screenX;
      mouseOffset = e.screenX - startPointX;
    });

    $(".carousel").mousemove(function(e) {
      var prevMouseOffset = mouseOffset;
      mouseOffset = e.screenX - startPointX;
      if (
        counter >= carouselClass.cardFullWidth ||
        counter <= -carouselClass.cardFullWidth
      ) {
        window.console.log(counter);
        if (counter < 0) {
          carouselClass.cardToEnd();
          carouselClass.replaceFirstAndLast(cards, true);
        } else {
          carouselClass.cardToStart();
          carouselClass.replaceFirstAndLast(cards, false);
        }
        counter = 0;
      }
      if (startPointX !== 0) {
        counter += mouseOffset - prevMouseOffset;
        carouselClass.changeCardPosition(cards, mouseOffset - prevMouseOffset);
      }
    });

    $(document).mouseup(function(e) {
      startPointX = 0;
      mouseOffset = 0;
    });
  }

  private changeCardPosition(cards: HTMLElement[], offset: number): void {
    cards.forEach(item => {
      var currentLeft = parseInt($(item).css("left"), 10);
      $(item).css("left", currentLeft + offset);
      this.setOpacity(item);
    });
  }

  private replaceFirstAndLast(cards: HTMLElement[], diraction: boolean): void {
    if (diraction) {
      var nextFirst = $(".carousel #first")
        .removeAttr("id")
        .next(".carousel img");
      var nextLast = $(".carousel #last")
        .removeAttr("id")
        .next(".carousel img");

      if (nextLast.length !== 0) nextLast.attr("id", "last");
      else $(".carousel img:first").attr("id", "last");

      if (nextFirst.length !== 0) nextFirst.attr("id", "first");
      else $(".carousel img:first").attr("id", "first");
    } else {
      var prevFirst = $(".carousel #first")
        .removeAttr("id")
        .prev(".carousel img");
      var prevLast = $(".carousel #last")
        .removeAttr("id")
        .prev(".carousel img");

      if (prevLast.length !== 0) prevLast.attr("id", "last");
      else $(".carousel img:last").attr("id", "last");

      if (prevFirst.length !== 0) prevFirst.attr("id", "first");
      else $(".carousel img:last").attr("id", "first");
    }
  }

  private cardToEnd(): void {
    var currentLeft = parseInt($(".carousel #first").css("left"), 10);
    $(".carousel #first").css("left", currentLeft + this.cardFullWidth * this.cardCount);
  }

  private cardToStart(): void {
    var currentLeft = parseInt($(".carousel #last").css("left"), 10);
    $(".carousel #last").css("left", currentLeft - this.cardFullWidth * this.cardCount);
  }

  private setOpacity(item: HTMLElement): void {
    var carouselWidth = $(".carousel").width();
    var position = $(item).position().left + this.cardFullWidth / 2;
    item.style.opacity = this.getOpacity(
      position,
      carouselWidth as number
    ).toString();
  }

  private getOpacity(x: number, parentWidth: number): number {
    // NOTE: Number 1 in Math.sqrt(1) and '+ 1' this is the number that sets the maximum value of the function.
    return -Math.pow((1 / (parentWidth / 2)) * x - Math.sqrt(1), 2) + 1;
  }
}
</script>

<style scoped>
.carousel {
  overflow: hidden;
}

.carousel img {
  flex-shrink: 0;
  position: relative;
  left: 1px;
  width: 200px;
  height: 200px;
  margin: 0 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
</style>
