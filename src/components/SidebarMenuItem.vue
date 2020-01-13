<template>
  <router-link :to="routerTo" :tag="tag">
    <div class="menu-item">
      <img id="icon" :src="fullIconPath"/>
      <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SidebarMenuItem extends Vue {
  @Prop() private title!: string;
  @Prop() private iconPath!: string;
  @Prop() private routerTo!: string;
  @Prop() private tag!: string;
  get fullIconPath() : string{
      return require('@/assets/' + this.iconPath);
  }
}
</script>

<style scoped>
#icon {
  height: 25px;
  width: 25px;
}

.menu-item {
  width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 12.5px;
}

.menu-item span {
  margin-left: 25px;
  color: white;
}
</style>
