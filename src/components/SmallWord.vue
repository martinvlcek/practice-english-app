<template>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >

    <v-row>
      <v-col v-for="item of items" :key="item.title" cols="12" md="4">
        <v-card variant="tonal">
          <template v-slot:title>
            <div v-html="item.title"></div>
          </template>

          <template v-slot:subtitle>
            <div v-html="item.subTitle"></div>
          </template>

          <!-- <template v-slot:subtitle>
          This is a card subtitle
          </template> -->

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

    <h1>small word</h1>
    </v-responsive>
  </v-container>
</template>
  
<script setup>
  const items = [
    {
      title: `as - ako / ked `,
      subTitle: `2 veci sa stali naraz`,
      text: `
        I watched her as she opened the letter. </br>
        As the day went on, the weather got worse.
      `,
      lesson: 2,
      course: 'INT 3'
    },
    {
      title: `just as - prave ked`,
      subTitle: `2 veci sa stali presne v rovnaky cas`,
      text: `
        Just as I sat down, the phone rang. </br>
        I had to leave just as the conversation started to be interesting.
      `,
      lesson: 2,
      course: 'INT 3'
    },
    {
      title: `make sb ____ - donutit`,
      subTitle: `niekoho hmovat`,
      text: `
        They made us work for 12 hours a day. </br>
        Yoy can't make me go there and apologize!. </br>
        Can yoy make him do </br></br>  
        zakladny tvar - bez <strong>to</strong>, bez <strong>s<strong>
      `,
      lesson: 2,
      course: 'INT 3'
    },
    {
      title: `although - hoci / aj ked`,
      text: `
        She couldn't do anything, although she was a director. </br>
        The don't want to talk to me, although I have apologizeds.
      `,
      lesson: 3,
      course: 'INT 3'
    },
    {
      title: `besides - este okrem`,
      text: `
        A lot of them are studying other subjects besides Italian. </br>
        She has also bought a book besides all the clothes. </br>
        Besides being my teammate, he is also my friend. </br> </br>
        <strong>
        besides ____ (sth) - za nejde osoba </br>
        besides ____ ing
        </strong>
      `,
      lesson: 4,
      course: 'INT 3'
    },
    {
      title: `instead of - namiesto`,
      text: `
        A lot of them are studying other subjects besides Italian. </br>
        She has also bought a book besides all the clothes. </br>
        Besides being my teammate, he is also my friend. </br> </br>
        <strong>
        instead of ____ (sth) </br>
        instead of ____ ing
        </strong>
      `,
      lesson: 4,
      course: 'INT 3'
    },
    {
      title: `so - tak / taky`,
      text: `
        The story was so stupid. </br>
        They are so nice. </br>
        He talks so quietly.
      `,
      lesson: 5,
      course: 'INT 3'
    },
    {
      title: `such - tak / taky`,
      text: `
        It was such a stupid story. </br>
        They are such nice people. </br>
        How can you say such a thinig.
      `,
      lesson: 5,
      course: 'INT 3'
    },
    {
      title: `whereas - zatial co`,
      subTitle: `1 ano, 2 nie`,
      text: `
        Some students are hard-working whereas others are not. </br>
        The first lesson was really exciting whereas the second was quite boring.
      `,
      lesson: 7,
      course: 'INT 3'
    },
    {
      title: `pretty - celkom / dost`,
      text: `
        She is pretty clever. </br>
        I am pretty sure she will come. </br>
        Peter was pretty furious yesterday.
      `,
      lesson: 8,
      course: 'INT 3'
    },
  ]
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