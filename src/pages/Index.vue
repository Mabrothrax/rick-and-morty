<template>
  <q-page>
    <main-component
      active
      :characters="characters"
      @updatePage="(page) => {updateThePage(page)}"
    ></main-component>
  </q-page>
</template>

<script lang="ts">
import { Character } from 'components/models'
import MainComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from '@vue/composition-api'
import gql from 'graphql-tag'
import  { getQuery } from '../utility/generateApolloQuery'

export default defineComponent({
  name: 'PageIndex',
  components: { MainComponent },
  methods: {
   async updateThePage (qpage: Number) {
     var self = this
      //@ts-ignore
      this.$apollo.queries.characters.fetchMore({
        variables: {
          page: qpage,
        },
        //@ts-ignore
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newChars = fetchMoreResult.characters
          //newChars.results = [...this.characters.results, ...newChars.results]
          return {
            characters: newChars
          }
        },
      })
    }
  },
  data () {
    return {
      characters: ref<Character[]>([]),
    }
  },
  //@ts-ignore
  apollo: {
    characters: {
      query: getQuery(),
      variables: {
        page: 1
      },
      loadingKey: 'loading',
    }
  },
  setup () {
  }
})
</script>
