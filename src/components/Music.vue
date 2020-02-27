<template>
  <div class="user-select-none">
    <div class="row d-flex justify-content-center align-items-baseline">
      <div class="form-group has-search w-75">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-baseline">
      <router-link
        v-for="(item, i) in categories"
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
import MusicTrackList from "@/components/MusicTrackList.vue";
import { MediaManager, Artist, Album, Track } from "@/script/mediaManager";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import $ from "jquery";

@Component({
  components: {
    Music,
    MusicTrackList
  }
})
export default class Music extends Vue {
  mediaManager = new MediaManager();
  tracks = new Array<Track>();
  db = new JsonDB(new Config("MediaDb", false, false, "/"));
  categories = [
    {
      title: "new",
      to: {
        name: "MusicNew"
      }
    },
    {
      title: "tracks",
      to: {
        name: "Tracks",
        params: {
          trackList: this.tracks
        }
      }
    },
    {
      title: "album",
      to: {
        name: "Album",
        params: {
          artistName: 'Скриптонит',
          albumName: '2004'
        }
      }
    },
    {
      title: "artist",
      to: {
        name: "Artist"
      }
    }
  ];

  mounted() {
    if (!this.db.exists("/artist"))
      this.mediaManager.findAudio("I:/Music(Max)/").then(() => {
        this.tracks = this.mediaManager.getTracks();
      });
    else this.mediaManager.getTracksFromDb().then(data => {
      this.tracks = data;
    });
  }

  getSongList(): Track[] {
    return this.mediaManager.getTracks();
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
