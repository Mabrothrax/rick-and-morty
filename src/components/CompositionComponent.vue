/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div>
    <div :class="this.$q.platform.is.iphone ? 'column' : 'row'">
      <div class="col-3">
        <q-img v-if="this.$q.platform.is.desktop" src="../assets/58f37720a4fa116215a9240f.png" :style="desktopStyle" />
        <q-img v-if="this.$q.platform.is.iphone" src="../assets/58f37720a4fa116215a9240f.png" :style="iphoneStyle" />
      </div>
      <div class="col" :style="this.$q.platform.is.iphone ? columnStyleIphone : columnStyleDesktop">
        <div :style="this.$q.platform.is.iphone ? iphoneInputStyle : desktopInputStyle">
          <q-input input-style="font-style: normal; font-weight: 500; font-size: 16px; color: #A9B1BD;" v-model="searchBox" borderless>
            <template v-slot:prepend>
              <a class="main-text" style="margin-left: 20px; margin-right: 20px;">Search by</a>
              <q-separator size="2px" vertical/>
              <q-select color="secondary"
                v-model="searchType"
                class="main-text"
                dense
                borderless
                :style="$q.platform.is.iphone ? 'width: 80px' : 'width: 120px'"
                :options="searchOpts"
                map-options
                emit-values
                @input="(inpt) => {searchType = inpt.label}"
              >
                <template v-slot:selected>
                  <a class="main-text" :style="$q.platform.is.iphone ? 'margin-left: 10px; margin-top: 3px' : 'margin-left: 16px'"> {{ searchType }}</a>
                </template>
              </q-select>
              <q-separator size="2px" vertical/>
            </template>
            <template v-slot:append>
              <q-btn color="secondary" round dense flat icon="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <q-separator style="color: #E5EAF4" />
    <q-table
      dense
      :data="favSwitch ? favData : data"
      :columns="columns"
      :row-key="searchType"
      :filter="searchBox"
      flat
      hide-pagination
      :pagination.sync="pagination"
    >
      <template v-slot:body-cell-photo="props">
        <q-td :props="props">
          <div>
            <q-img :src="props.row.image" style="height: 68px; width: 43px"/>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-fav="props">
        <q-td :props="props">
          <div :key="componentKey">
            <q-btn style="border: 2px solid #11B0C8; width: 43px; height: 43px;" 
              color="secondary" 
              :flat="props.row.fav ? false : true" 
              :icon="props.row.fav ? 'star' : 'star_border'" 
              @click="props.row.fav ? unFavorChar(props.row) : favorChar(props.row)"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:top>
        <q-btn push class="main-text" :color="allCharsBtn ? 'secondary' : 'primary'" flat label="All Characters"
          @click="getAllChars()"
        />
        <q-btn push class="main-text" :color="favCharsBtn ? 'secondary' : 'primary'" flat label="Favorites"
          @click="filterFavs()"
          />
        <q-space />
      </template>
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-secondary q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Well this is sad... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
      <template v-slot:body-cell="props">
        <q-td :props="props">
          <a class="main-text">{{ props.value }}</a>
        </q-td>
      </template>
      <template v-slot:body-cell-gender="props">
        <q-td :props="props">
          <div class="row">
            <q-icon 
              v-if="props.value.toLowerCase() == 'male' || props.value.toLowerCase() == 'female'" 
              :name="props.value.toLowerCase() == 'male' ? 'male' : 'female'" 
              color="primary"
              size="22px"
            />
            <q-icon
              v-if="props.value.toLowerCase() == 'genderless' || props.value.toLowerCase() == 'unknown'" 
              :name="props.value.toLowerCase() == 'genderless' ? 'close' : 'remove'"
              size="sm" 
              color="primary"
            />
            <a style="margin-left: 4px" class="main-text">{{ props.value }}</a>
          </div>
        </q-td>
      </template>
    </q-table>
    <q-separator style="color: #E5EAF4" />
    <div class="row items-start q-pa-md" :style="$q.platform.is.iphone ? paginationStyleIphone : paginationStyleDesktop">
      <q-pagination
        dense
        v-model="pagination.page"
        color="secondary"
        :max-pages="$q.platform.is.iphone ? 1 : 9"
        :max="maxPagesCount"
        :boundary-numbers="true"
        :direction-links="true"
        :size="$q.platform.is.iphone ? '17px' : '23.5px'"
        padding="xs md"
        icon-prev="arrow_left"
        icon-next="arrow_right"
      >
    </q-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from '@vue/composition-api'

export default defineComponent({
  name: 'CompositionComponent',
  props: ['characters'],
  watch: {
    characters: {
      handler () {
        this.data = this.data.concat(this.characters.results)
        this.filterEpisodes()
      }
    }
  },
  computed: {
    maxPagesCount: function () {
      var result : number = Math.round(this.data.length / 8)
      return result
    }
  },
  mounted () {
   this.generateButtonData()
  },
  updated () {
    
  },
  methods: {
    logIt(v) {
      console.log('LOG ', v)
    },
    favorChar (char: any) {
    var charIdx = this.data.findIndex((c) => {
       if (c.id === char.id) return c
     })
    
    if (charIdx != null) {
      this.data[charIdx].fav = true
      this.favData.push(this.data[charIdx])
    }
    this.forceRerender()
    },
    unFavorChar (char: any) {
      var charIdx = this.favData.findIndex((c) => {
        if (c.id === char.id) return c
      })
      if (charIdx != null) {
        this.favData[charIdx].fav = false
        this.favData.splice(charIdx, 1)
      }
      this.forceRerender()
    },
    forceRerender () {
      this.componentKey += 1
    },
    filterFavs () {
      this.allCharsBtn = false
      this.favCharsBtn = true
      this.favSwitch = true;
    },
    getAllChars () {
      this.allCharsBtn = true
      this.favCharsBtn = false
      this.favSwitch = false
    },
    filterEpisodes () {
      this.characters.results.forEach((char: any) => {
        if (char.episode.length > 1) char.episode = [...char.episode].pop().episode
          if(typeof char.episode === 'object') char.episode = char.episode[0].episode
        char.fav = false
      })
    },
    generateButtonData () {
      for(let i = 1; i <= 34; i++) {
        this.$emit('updatePage', i)
      }
    }
  },
  data () {
    const searchOpts = [
      { label: 'Name', val: 'name' },
      { label: 'Identifier', val: 'id' },
      { label: 'Episode', val: 'episode' }
    ]
    return {
      componentKey: 0,
      favSwitch: false,
      searchBox: '',
      searchType: searchOpts[0].label,
      allCharsBtn: true,
      favCharsBtn: false,
      searchOpts,
      columns: [
        { name: 'photo', align: 'left', label: 'Photo', field: 'photo'},
        { name: 'id', align: 'left', label: 'Character ID', field: 'id'},
        { name: 'name', align: 'left', label: 'Name', field: 'name' },
        { name: 'gender', align: 'left', label: 'Gender', field: 'gender' },
        { name: 'species', align: 'left', label: 'Species', field: 'species' },
        { name: 'episode', align: 'left', label: 'Last Episode', field: 'episode' },
        { name: 'fav', align: 'left', label: 'Add To Favorites', field: 'fav' }
      ],
      data: [],
      favData: [],
      pageButtons: [] as Array<number>,
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 8
      },
      desktopStyle: 'height: 140px; max-width: 250px; margin-left:35%',
      iphoneStyle: 'height: 140px; max-width: 250px; margin-left:17%',
      desktopInputStyle: 'box-sizing: border-box; border-radius: 12px; border: 1px solid #A9B1BD; width: 505px; height: 56px',
      iphoneInputStyle: 'box-sizing: border-box; border-radius: 12px; border: 1px solid #A9B1BD; width: 335px; height: 56px; margin-bottom: 10px; padding-top: 0px',
      columnStyleDesktop: 'margin-left:5%; margin-top:3%',
      columnStyleIphone: 'margin-left:5%;',
      paginationStyleDesktop: 'margin-left: 153px; margin-bottom: 61px; margin-top: 40px;',
      paginationStyleIphone: 'margin-bottom: 41px; margin-top: 20px;'
    }
  }
})
</script>
<style lang='scss' scoped>
.main-text {
  font-style: normal; font-weight: 500; font-size: 16px; color: #A9B1BD;
}
</style>
