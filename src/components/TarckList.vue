<template>
  <div class="list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action"
      v-for="(item, i) in tracks"
      :key="i"
    >
      <span>{{ ++i }}</span>
      <span class="ml-4">{{ item.title }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class TrackList extends Vue {
    @Prop() tracks!: any[]
}
</script>

<style scoped></style>
