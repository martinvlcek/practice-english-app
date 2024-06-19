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
          <v-row align="center" justify="center">
            <v-col>
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
            </v-col>

            <v-col>
              <v-radio-group
                class="d-flex"
                v-model="courseFilter"
                inline
              >
                <v-radio
                  label="All"
                  value="all"
                ></v-radio>
                <v-radio
                  label="INT 1"
                  value="INT 1"
                ></v-radio>
                <v-radio
                  label="INT 2"
                  value="INT 2"
                ></v-radio>
                <v-radio
                  label="INT 3"
                  value="INT 3"
                ></v-radio>
                <v-radio
                  label="INT 4"
                  value="INT 4"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
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

  const courseFilter = ref('all')

  const wordListItems = computed(() => {

    if (courseFilter.value === 'all') {
      return wordList
    }

    return wordList.filter(course => course.course.toLowerCase() === courseFilter.value.toLowerCase())
  })

</script>
