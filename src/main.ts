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
import { createMemoryHistory, createRouter } from 'vue-router'

import SmallWord from './components/SmallWord.vue'
import WordList from './components/WordList.vue'

const routes = [
  { path: '/', component: SmallWord },
  { path: '/small-word', component: SmallWord },
  { path: '/word-list', component: WordList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
