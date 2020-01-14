<template>
  <div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <div class="form-group has-search w-75">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <a class="selector">songs</a>
      <a class="selector">albums</a>
      <a class="selector">artists</a>
      <a class="selector">playlists</a>
      <a class="selector">filter</a>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";

@Component
export default class Music extends Vue {}
</script>

<style scoped>
.form-control {
  border-radius: 25px;
  z-index: 900;
}

hr {
  margin-top: 5px;
}

.selector {
  text-decoration: none;
  border-radius: 15px;
  padding: 1px 10px;
  font-size: 11pt;
  cursor: pointer;
  margin: 0 2px
}

.selector:hover {
  text-decoration: none;
  background-color: rgb(0, 132, 255);
  color: white;
}

.selector-active {
  background-color: rgb(0, 132, 255);
  color: white;
}

</style>
