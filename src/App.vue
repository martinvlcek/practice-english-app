<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-app-bar
          color="primary"
        >
          <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

          <v-toolbar-title>Menu</v-toolbar-title>

          <RouterLink class="mx-2" to="/small-word">Small Word</RouterLink>
          <RouterLink class="mx-2" to="/word-list">Word list</RouterLink>
          <RouterLink class="mx-2" to="/sentence-patterns">Sentence patterns</RouterLink>

          <v-spacer></v-spacer>

          <v-btn icon="mdi-brightness-4" variant="text" @click="toggleTheme"></v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <!-- <v-list
            :items="items"
          ></v-list> -->

          <!-- <RouterLink to="/small-word">Small Word</RouterLink>
          <RouterLink to="/word-list">Word list</RouterLink> -->

        </v-navigation-drawer>

        <v-main>
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
  import { useTheme } from 'vuetify'
  import { ref, watch } from 'vue'

  const theme = useTheme()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  const group = ref(null)
  const drawer = ref(false)
  const items = ref([
    {
      title: 'Foo',
      value: 'foo',
    },
    {
      title: 'Bar',
      value: 'bar',
    },
    {
      title: 'Fizz',
      value: 'fizz',
    },
    {
      title: 'Buzz',
      value: 'buzz',
    },
  ])

  watch(group, () => {
    drawer.value = false
  })
</script>
