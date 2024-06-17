<template>
  <v-container>
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <template v-if="firstCourseItems.length">
        <h1 class="my-4">INT 1</h1>

        <v-row>
          <v-col v-for="item of firstCourseItems" :key="item.title" cols="12" md="6">
            <v-card variant="tonal">
              <template v-slot:title>
                <div v-html="item.title"></div>
              </template>

              <template v-slot:subtitle>
                <div v-html="item.subTitle"></div>
              </template>

              <template v-slot:text>
                <div v-html="item.text"></div>
              </template>

              <template v-slot:actions>
                <v-chip variant="tonal">
                  Lesson {{ item.lesson }}
                </v-chip>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-if="secondCourseItems.length">
        <h1 class="my-4">INT 2</h1>

        <v-row>
          <v-col v-for="item of secondCourseItems" :key="item.title" cols="12" md="6">
            <v-card variant="tonal">
              <template v-slot:title>
                <div v-html="item.title"></div>
              </template>

              <template v-slot:subtitle>
                <div v-html="item.subTitle"></div>
              </template>

              <template v-slot:text>
                <div v-html="item.text"></div>
              </template>

              <template v-slot:actions>
                <v-chip variant="tonal">
                  Lesson {{ item.lesson }}
                </v-chip>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-if="thirdCourseItems.length">
        <h1 class="my-4">INT 3</h1>

        <v-row>
          <v-col v-for="item of thirdCourseItems" :key="item.title" cols="12" md="6">
            <v-card variant="tonal">
              <template v-slot:title>
                <div v-html="item.title"></div>
              </template>

              <template v-slot:subtitle>
                <div v-html="item.subTitle"></div>
              </template>

              <template v-slot:text>
                <div v-html="item.text"></div>
              </template>

              <template v-slot:actions>
                <v-chip variant="tonal">
                  Lesson {{ item.lesson }}
                </v-chip>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-if="forthCourseItems.length">
        <h1 class="my-4">INT 4</h1>

        <v-row>
          <v-col v-for="item of forthCourseItems" :key="item.title" cols="12" md="6">
            <v-card variant="tonal">
              <template v-slot:title>
                <div v-html="item.title"></div>
              </template>

              <template v-slot:subtitle>
                <div v-html="item.subTitle"></div>
              </template>

              <template v-slot:text>
                <div v-html="item.text"></div>
              </template>

              <template v-slot:actions>
                <v-chip variant="tonal">
                  Lesson {{ item.lesson }}
                </v-chip>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import {computed} from "vue";
  import {smallWordList} from "@/items/small-word-list";

  const firstCourseItems = computed(() => {
    return smallWordList.filter(course => course.course === 'INT 1');
  })

  const secondCourseItems = computed(() => {
    return smallWordList.filter(course => course.course === 'INT 2');
  })

  const thirdCourseItems = computed(() => {
    return smallWordList.filter(course => course.course === 'INT 3');
  })

  const forthCourseItems = computed(() => {
    return smallWordList.filter(course => course.course === 'INT 4');
  })
</script>

<style lang="scss">
  .v-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .v-card-title {
    white-space: normal;
    line-height: 1.2 !important;
  }

  .v-card-text {
    // letter-spacing: 1em;
  }
</style>
