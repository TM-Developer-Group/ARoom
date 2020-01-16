<template>
  <div id="sidebar-menu">
    <div id="wrapper">
      <div id="sidebar-panel">
        <div id="sidebar">
          <div class="sidebar-block">
            <div style="margin-bottom: 25px">
              <ul>
                <li @click="toggleSidebar">
                  <div class="menu-item">
                    <img id="icon" src="@/assets/menu-white.png" />
                  </div>
                </li>
              </ul>
            </div>
            <ul>
              <SidebarMenuItem
                v-for="item in getMenuItems()"
                :key="item.id"
                :title="item.title"
                :routerTo="item.routerTo"
                :iconPath="item.iconPath"
                :tag="item.tag"
              />
            </ul>
          </div>
          <div class="sidebar-block">
            <ul>
              <SidebarMenuItem
                title="Settings"
                routerTo="/"
                iconPath="settings-white.png"
                tag="li"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SidebarMenuItem from "@/components/SidebarMenuItem.vue";
import $ from "jquery";

@Component({
  components: {
    SidebarMenu,
    SidebarMenuItem
  }
})
export default class SidebarMenu extends Vue {
  toggleSidebar(): void {
    $("#wrapper").toggleClass("wrapper-active");
  }
  // TODO: Get object from file.
  getMenuItems(): any {
    return [
      {
        id: 0,
        title: "Music",
        routerTo: "/Music",
        iconPath: "music-white.png",
        tag: "li"
      },
      {
        id: 1,
        title: "Movie",
        routerTo: "/",
        iconPath: "movie-white.png",
        tag: "li"
      },
      {
        id: 2,
        title: "Photo & Video",
        routerTo: "/",
        iconPath: "images-white.png",
        tag: "li"
      }
    ];
  }
}
</script>

<style scoped>
#icon {
  height: 25px;
  width: 25px;
}

#sidebar-menu {
  position: fixed;
  display: flex;
  width: auto;
  overflow: hidden;
  z-index: 999;
  user-select: none;
}

#sidebar-panel {
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
}

#wrapper {
  height: 100vh;
  width: 50px;
  background-color: rgb(0, 132, 255);
  overflow: hidden;
  display: inline-block;
  transition: width 0.3s;
}

.wrapper-active {
  width: 200px !important;
}

#sidebar {
  display: flex;
  height: 98%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#sidebar ul {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

.sidebar-block {
  width: 100%;
}

#sidebar li {
  text-align: center;
  padding: 10px 0px;
  height: 45px;
  cursor: pointer;
}

#sidebar li:hover {
  background-color: rgba(255, 255, 255, 0.212);
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
