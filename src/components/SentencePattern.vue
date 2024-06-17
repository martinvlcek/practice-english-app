<template>
    <v-container>
      <v-responsive
        class="align-centerfill-height mx-auto"
        max-width="900"
      >
        <v-row>
          <v-col v-for="item of items" :key="item.title" cols="12" md="6">
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
      </v-responsive>
    </v-container>
  </template>

  <script setup>
    const items = [
      {
        title: `should have ____ ed <sup>3rd</sup> `,
        subTitle: `mal hmnut (minulost)`,
        text: `
          <strong>A)</strong> </br>
          You should have done it. </br>
          I should have helped you yesterday. </br>
          She shouldn't have told her sister about it. </br></br>

          <strong>B)</strong> </br>
          Do you think you should have ____ ed? <sup>3rd</sup> </br>
          Yes, I think I should have ____ ed. <sup>3rd</sup> </br>
          No, I don't think I should have ____ ed. <sup>3rd</sup>
        `,
        lesson: 13,
        course: 'INT 3'
      },
      {
        title: `have sth ____ ed <sup>3rd</sup> `,
        subTitle: `nechat (si) nieco urobit`,
        text: `
          He has his hair cut. </br>
          I am having my house painted at the moment. </br>
          I will have my blood pressure checked. </br></br>
          I have ____ ____ ed. <sup>3rd</sup> </br>
          I had </br>
          I will have
        `,
        lesson: 13,
        course: 'INT 3'
      },
      {
        title: `I had been ____ ing before ____ <sup>sb</sup> ____ <sup>2nd</sup>`,
        text: `
          She had been working before he arrived. </br>
          I had been helping her until we finished. </br>
          I had been arranging the meeting beforemy boss sent me the email. </br></br>

          I had been ____ ing before ____ <sup>sb</sup> ____ <sup>2nd</sup> </br>
          I had been ____ ing until ____ <sup>sb</sup> ____ <sup>2nd</sup></br>
          They
        `,
        lesson: 13,
        course: 'INT 3'
      },
      {
        title: `Did you use to ____ ?`,
        subTitle: `zvykol si hmovat? (otazka)`,
        text: `
          Did you use to ____ ? </br>
          Yes, I use used to ____ . </br>
          No, I didn't use to ____ . </br></br>

          Did you use to swim? </br>
          Yes, I used to swin. </br>
          No, I don't use to swin.
        `,
        lesson: 12,
        course: 'INT 3'
      },
      {
        title: `Wish - A) future`,
        subTitle: `Kiezby / Zelam si aby som hmoval`,
        text: `
          I wish he would call me. </br>
          She wishes her mom would be healty. </br>
          They wish we wouldn't leave on friday. </br></br>

          I wish I would ____ <sup>verb</sup>
        `,
        lesson: 12,
        course: 'INT 3'
      },
      {
        title: `Wish - B) past`,
        subTitle: `Kiezby / Zelam si aby som hmol`,
        text: `
          I wish I had studied more when I was young. </br>
          She wishes she had known it last week. </br>
          They wish they didn't got married. </br></br>

          I wish I had ____ ed. <sup>3rd</sup>
        `,
        lesson: 12,
        course: 'INT 3'
      },
      {
        title: `Wish - C) present`,
        subTitle: `Kiezby / Zelam si aby som hmoval`,
        text: `
          I wish I spoke English better. </br>
          She wishes she knew how to cook. </br>
          We wish it didn't rain som often. </br>
          I wish I played tennis so well. </br></br>

          I wish I ____ ed. <sup>2nd</sup>
        `,
        lesson: 12,
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
