<template>
  <suspense>

  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
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
          :items="items"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-responsive>
  </v-container>
</suspense>

</template>

<script setup>
  import { ref } from 'vue'

  const search = ref('')
  const headers = ref([
    { key: 'enTranslate', title: 'EN translate', sortable: false },
    { key: 'skTranslate', title: 'SK translate', sortable: false },
    { key: 'text', title: 'Text', sortable: false },
    { key: 'lesson', title: 'Lesson', sortable: false },
    { key: 'course', title: 'Course', sortable: false },
  ])
  const items = ref([
    {
      enTranslate: '(a) challenge',
      skTranslate: 'vyzva',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'achieve',
      skTranslate: 'dosiahnut',
      text: 'achieved',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'struggle (with)',
      skTranslate: 'zapasit s tym',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'set a target',
      skTranslate: 'stanovit si ciel',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'deal with (sth)',
      skTranslate: 'zaoberat sa',
      text: 'dealt, dealt',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'appropriate',
      skTranslate: 'vhodny',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'particular',
      skTranslate: 'konkretny',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'advice',
      skTranslate: 'rada',
      text: 'a piece of advice',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'circumstances',
      skTranslate: 'okolnosti',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: 'overcome',
      skTranslate: 'prekonat',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) failure',
      skTranslate: 'chyba / zlyhanie',
      text: '',
      lesson: 1,
      course: 'INT 3'
    },


    {
      enTranslate: '(a) detached house',
      skTranslate: 'samostatne stojaci (rodinny) dom',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) semi-detached house',
      skTranslate: 'dvojdom',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) block of flats',
      skTranslate: 'panelak / bytovka',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) basement',
      skTranslate: 'suteren',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) studio flat',
      skTranslate: 'garzonka',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) gazebo',
      skTranslate: 'altanok',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) mansion',
      skTranslate: 'panske sidlo',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) shed',
      skTranslate: 'kolna / sopa',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) pantry',
      skTranslate: 'spajza / komora',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) cellar',
      skTranslate: 'pivnica',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) porch',
      skTranslate: 'veranda',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) conservatory',
      skTranslate: 'zimna zahrada',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) row house',
      skTranslate: 'radovy dom',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) entrance',
      skTranslate: 'vstup',
      text: '',
      lesson: 2,
      course: 'INT 3'
    },
    

    {
      enTranslate: 'put on ____',
      skTranslate: 'obliect si / obut si',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'take off ____',
      skTranslate: 'vyzliect si / vyzut si',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'get changed',
      skTranslate: 'prezliect sa',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'get dressed',
      skTranslate: 'obliect sa',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'fit',
      skTranslate: 'sediet / pasovat',
      text: 'fit-fit, fitted-fitted',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'suit',
      skTranslate: 'pristat',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'match',
      skTranslate: 'hodit sa',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) cardigan',
      skTranslate: 'lahky svetrik (zapinaci)',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: 'tights',
      skTranslate: 'pancuchove nohavice',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) hoodie',
      skTranslate: 'mikina s kapucnou',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) blazer',
      skTranslate: 'sportove sako',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) turtleneck',
      skTranslate: 'rolak',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) sleeve',
      skTranslate: 'rukav',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) necckline',
      skTranslate: 'vystrih (v-neck, deep, round ...)',
      text: '',
      lesson: 3,
      course: 'INT 3'
    },
    

    {
      enTranslate: 'look up (information)',
      skTranslate: 'vyhladavat (informaciu)',
      text: '',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'bring up',
      skTranslate: 'vychovat',
      text: 'brought',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'make up',
      skTranslate: 'vymysliet',
      text: '',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'turn up',
      skTranslate: 'zvysit / zosilnit',
      text: '',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'throw up',
      skTranslate: 'zvracat',
      text: 'threw, thrown',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'grow up',
      skTranslate: 'vyrast',
      text: 'grew, growm',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'cut down (on) (sth / ____ing)',
      skTranslate: 'obmedzit',
      text: '',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'break down',
      skTranslate: 'pokazit sa',
      text: '',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'let down',
      skTranslate: 'sklamat',
      text: 'let, let',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'put down',
      skTranslate: 'zhadzovat / ponizovat',
      text: 'let, let',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'turn down',
      skTranslate: 'stisit / zoslabit',
      text: 'let, let',
      lesson: 4,
      course: 'INT 3'
    },
    {
      enTranslate: 'calm down',
      skTranslate: 'upokojit sa / ukludnit sa',
      text: 'let, let',
      lesson: 4,
      course: 'INT 3'
    },
    

    {
      enTranslate: 'confused (about)',
      skTranslate: 'zmateny',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'blunt (with sb)',
      skTranslate: 'priamy (na rovinu ...)',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'adorable',
      skTranslate: 'rozkosny',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'homesick',
      skTranslate: 'smutiaci za domovom',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'offended (by)',
      skTranslate: 'urazeny',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'enthusiastic (about)',
      skTranslate: 'nadseny',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'furios (with sb)',
      skTranslate: 'zurivy',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'thrilled (about)',
      skTranslate: 'uneseny (nadseny)',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'delighted (with)',
      skTranslate: 'poteseny',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'be sick and tired (of)',
      skTranslate: 'mat plne zuby ...',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    {
      enTranslate: 'desperate (about)',
      skTranslate: 'zufaly',
      text: '',
      lesson: 5,
      course: 'INT 3'
    },
    

    {
      enTranslate: '(a) bonnet',
      skTranslate: 'kapota',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) windscreen',
      skTranslate: 'celne sklo',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) windscreen wiper',
      skTranslate: 'stierac',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) steering wheel',
      skTranslate: 'volat',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) boot',
      skTranslate: 'kufor',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) tyre',
      skTranslate: 'pneumatika',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) bumper',
      skTranslate: 'naraznik',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(side) rear-view mirror',
      skTranslate: 'spatne zrkadlo (v strede)',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: 'get a parking ticket',
      skTranslate: 'dostat pokutu za parkovanie',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) puncture',
      skTranslate: 'defekt',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) wheel clamp',
      skTranslate: 'papuca',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: 'tow',
      skTranslate: 'tahat / odtiahnut (auto)',
      text: 'towed, towed',
      lesson: 6,
      course: 'INT 3'
    },
    {
      enTranslate: 'ccrash',
      skTranslate: 'naburat',
      text: '',
      lesson: 6,
      course: 'INT 3'
    },
    
  
    {
      enTranslate: 'arrange',
      skTranslate: 'zorganizovat',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'schedule (for)',
      skTranslate: 'naplanovat',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'postpone',
      skTranslate: 'posunut (na neskor)',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'take place (in)',
      skTranslate: 'konat sa',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'take part (in)',
      skTranslate: 'zucastnit sa',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) participant (in)',
      skTranslate: 'ucastnik',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'discuss sth with sb',
      skTranslate: 'diskutovat',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) matter',
      skTranslate: 'zalezitost',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: '(an) agenda',
      skTranslate: 'program (schodze ...)',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) handout',
      skTranslate: 'podklad',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'point out (sth)',
      skTranslate: 'poukazat (na nieco)',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'summarize',
      skTranslate: 'zhrnut (informacie)',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'take minutes',
      skTranslate: 'urobit zapis',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    {
      enTranslate: 'run the meeting',
      skTranslate: 'viest stretnutie',
      text: '',
      lesson: 7,
      course: 'INT 3'
    },
    
    
    {
      enTranslate: 'faint',
      skTranslate: 'omdliet',
      text: '',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'shiver (with)',
      skTranslate: 'trias sa (od zimy)',
      text: '',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'nod',
      skTranslate: 'prikyvnut / kyvat (hlavou)',
      text: 'nodded',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'leap (over)',
      skTranslate: 'vyskocit / skocit',
      text: 'leapt-leapt / leapted-leaped',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'stumble (on)',
      skTranslate: 'zakopnut / potknut sa',
      text: '',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'tiptoe',
      skTranslate: 'chodit po spickach',
      text: 'tiptoed / toptoeing',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'sweat',
      skTranslate: 'potit sa',
      text: '',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'stretch',
      skTranslate: 'natiahnut sa',
      text: '',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'grab',
      skTranslate: 'zobrat / schmatnut (a ist ...)',
      text: 'grabbed',
      lesson: 8,
      course: 'INT 3'
    },
    {
      enTranslate: 'snap your fingers',
      skTranslate: 'lusknut prstami',
      text: 'snapped',
      lesson: 8,
      course: 'INT 3'
    },

      
    {
      enTranslate: '(a) hobo',
      skTranslate: 'bezdak / tulak',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: 'get high',
      skTranslate: 'zhulit sa',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) dude',
      skTranslate: 'kamo',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(be / get) hammered',
      skTranslate: 'slaty na mol',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: 'dump sb',
      skTranslate: 'dat kopacky',
      text: 'dumped',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: 'hang out',
      skTranslate: 'flakat sa',
      text: 'hung, hung',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) weirdo',
      skTranslate: 'cudak / podivin',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) jerk',
      skTranslate: 'debil / kreten',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) hooker',
      skTranslate: 'stetka',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) chick',
      skTranslate: 'mlada kocka / zaba',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) hangover',
      skTranslate: 'opica',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) nuts, bananas',
      skTranslate: 'blaznivy / streleny - sis',
      text: '',
      lesson: 9,
      course: 'INT 3'
    },
    

    
    

    
    
    
    
    
    
    


    {
      enTranslate: '(a) documentary',
      skTranslate: 'dokument (film)',
      text: 'documentaries',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) soap opera',
      skTranslate: 'telenovela',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) cartoon',
      skTranslate: 'kresleny film / rozpravka',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) weather forecast',
      skTranslate: 'predpoved pocasia',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) commercial',
      skTranslate: 'reklama (v telke)',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(an) episode',
      skTranslate: 'cast serialu / epizoda',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: 'publish',
      skTranslate: 'zverejnit / publikovat',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: 'broadcast',
      skTranslate: 'vysielat',
      text: 'broadcasted-broadcasted, broadcast-broadcast',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) tabloid',
      skTranslate: 'bulvar',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: 'shoot',
      skTranslate: 'natacat',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: 'show on TV',
      skTranslate: 'vysielat v telke',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) series',
      skTranslate: 'serial',
      text: '',
      lesson: 10,
      course: 'INT 3'
    },
    

    {
      enTranslate: `on sb's behalf / on behalf of`,
      skTranslate: 'v mene niekoho',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    {
      enTranslate: 'on condition that',
      skTranslate: 'pod podmienkou ze',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    {
      enTranslate: 'on purposes',
      skTranslate: 'zamerne / naschval',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    {
      enTranslate: 'on the phone',
      skTranslate: 'na telefone',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    {
      enTranslate: 'on your own',
      skTranslate: 'sam',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    {
      enTranslate: 'on average',
      skTranslate: 'premerne',
      text: '',
      lesson: 11,
      course: 'INT 3'
    },
    

    {
      enTranslate: '(a) laptop',
      skTranslate: 'prenosny pocitac',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'work from home',
      skTranslate: 'pracovat z domu',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: '(a) task',
      skTranslate: 'uloha',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: '(in the) workspace',
      skTranslate: 'pracovisko',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'up-to-date',
      skTranslate: 'aktualne / najnovsie',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'remind sb to ____',
      skTranslate: 'pripomenut',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'manage (to____)',
      skTranslate: 'zvladnut',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'forwards sth (to)',
      skTranslate: 'preposlat',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'training',
      skTranslate: 'trenink (skolenia)',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    {
      enTranslate: 'make progress (with)',
      skTranslate: 'urobit pokrok',
      text: '',
      lesson: 12,
      course: 'INT 3'
    },
    
  ])
</script>
