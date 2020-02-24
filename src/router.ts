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
                    name: 'MusicNew',
                    path: 'New',
                    component: () => import('@/components/MusicNewTab.vue')
                },
                {
                    name: 'Tracks',
                    path: 'Tracks',
                    component: () => import('@/components/MusicTrackList.vue'),
                    props: true
                },
                {
                    name: 'Album',
                    path: 'Album',
                    component: () => import('@/components/Album.vue')
                },
                {
                    name: 'Artist',
                    path: 'Artist',
                    component: () => import('@/components/Artist.vue')
                }
            ]
        }
    ]
})