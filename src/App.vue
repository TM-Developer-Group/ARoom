<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/HelloWorld">Say Hello!</router-link>
    </div>
    <router-view/>
    -->
    <SidebarMenu/>
    <div class="content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'

@Component({
  components: {
    HelloWorld, SidebarMenu
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  margin-left: 50px;
  transition: all 0.1s;
}
</style>
