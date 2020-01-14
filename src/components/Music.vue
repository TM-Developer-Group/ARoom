<template>
  <div class="user-select-none">
    <div class="row d-flex justify-content-center align-items-baseline">
      <div class="form-group has-search w-75">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <a class="selector selector-active">songs</a>
      <a class="selector">albums</a>
      <a class="selector">artists</a>
      <a class="selector">playlists</a>
      <a class="selector">filter</a>
    </div>
    <hr />
    <MusicSongList :songList="getSongList()"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MusicSongList from '@/components/MusicSongList.vue';
import $ from "jquery";

@Component({
  components:{
    Music, MusicSongList
  }
})
export default class Music extends Vue {
  getSongList():Array<any> {
    return [
      {
        song: {
          name: 'Song 1',
          duration: '1:00',
          genre: 'genre 1',
          album: {
            name: 'Album 1'
          }
        },
        artist: {
          name: 'Artist 1'
        }
      },
      {
        song: {
          name: 'Song 1',
          duration: '1:00',
          genre: 'genre 1',
          album: {
            name: 'Album 1'
          }
        },
        artist: {
          name: 'Artist 1'
        }
      }
    ]
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
