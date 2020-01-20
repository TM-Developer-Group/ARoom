<template>
  <div class="user-select-none">
    <div class="row d-flex justify-content-center align-items-baseline">
      <div class="form-group has-search w-75">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <router-link
        v-for="(item, i) in getCategories()"
        :key="i"
        class="selector"
        exact-active-class="selector-active"
        :to="item.to"
      >
        {{ item.title }}
      </router-link>
    </div>
    <hr />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MusicSongList from "@/components/MusicSongList.vue";
import $ from "jquery";

@Component({
  components: {
    Music,
    MusicSongList
  }
})
export default class Music extends Vue {
  getCategories(): any[] {
    return [
      {
        title: "new",
        to: {
          name: "MusicNew",
        }
      },
      {
        title: "songs",
        to: {
          name: "MusicSongs",
          params: {
            songList: this.getSongList()
          }
        }
      }
    ];
  }
  getSongList(): any[] {
    return [
      {
        song: {
          name: "Song 1",
          duration: "1:00",
          genre: "genre 1",
          album: {
            name: "Album 1"
          }
        },
        artist: {
          name: "Artist 1"
        }
      },
      {
        song: {
          name: "Song 1",
          duration: "1:00",
          genre: "genre 1",
          album: {
            name: "Album 1"
          }
        },
        artist: {
          name: "Artist 1"
        }
      }
    ];
  }
}
</script>

<style scoped>
.form-control {
  border-radius: 25px;
  z-index: 900;
}

.form-control::placeholder {
  text-align: center;
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
  margin: 0 2px;
  color: inherit;
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

.user-select-none {
  user-select: none;
}
</style>
