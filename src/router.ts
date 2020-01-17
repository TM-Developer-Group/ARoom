import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/HelloWorld',
            component: () => import('@/components/HelloWorld.vue')
        },
        {
            name: 'Music',
            path: '/Music',
            component: () => import('@/components/Music.vue'),
            children: [
                {
                    name: 'MusicSongs',
                    path: 'Songs',
                    component: () => import('@/components/MusicSongList.vue'),
                    props: true
                }
            ]
        }
    ]
})