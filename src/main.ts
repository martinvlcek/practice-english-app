/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Router
import { createRouter, createWebHistory } from 'vue-router'

import SmallWord from './components/SmallWord.vue'
import WordList from './components/WordList.vue'
import SentencePattern from './components/SentencePattern.vue'

const routes = [
  { path: '/small-word', component: SmallWord },
  { path: '/word-list', component: WordList },
  { path: '/sentence-patterns', component: SentencePattern },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
