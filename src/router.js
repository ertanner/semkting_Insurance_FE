import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import PostPage from './components/post/post.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/post', component: PostPage }
]

export default new VueRouter({mode: 'history', routes})
