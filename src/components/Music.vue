<template>
  <div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <div class="form-group has-search w-50">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
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
}
</style>
