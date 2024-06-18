<template>
  <v-container>
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <v-card
        title="Word list"
        flat
      >
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </template>

        <v-data-table
          :headers="headers"
          :items="wordListItems"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import {computed, ref} from 'vue'
import {wordList} from "@/items/word-list";

  const search = ref('')
  const headers = ref([
    { key: 'enTranslate', title: 'EN translate', sortable: false },
    { key: 'skTranslate', title: 'SK translate', sortable: false },
    { key: 'text', title: 'Text', sortable: false },
    { key: 'lesson', title: 'Lesson', sortable: false },
    { key: 'course', title: 'Course', sortable: false },
  ])

  // const list = ref(
  //   wordList
  // )

  const wordListItems = computed(() => {
    // return list.value;
    return wordList;
  })

</script>
