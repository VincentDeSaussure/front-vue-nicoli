<template>
  <v-list two-line>
    <v-subheader
    >
      {{ title }}
    </v-subheader>

    <div v-for="(item, index) in listeDItem" :key="'boucle' + index">
      <v-list-tile>

        <v-list-tile-content :key="'date' + index">
          <v-list-tile-sub-title v-html="supprimeLesDoublonsPourLeSoustitre(index, item.date)" text-sm-left></v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-content  :key="'description' + index">
          <v-list-tile-title v-html="item.description" text-sm-left></v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
    </div>
  </v-list>
</template>

<script>
export default {
  name: 'listeDuCv',
  props: [ 'listeDItem', 'title'],
  methods: {
    supprimeLesDoublonsPourLeSoustitre(index, subtitle) {
      if (index !== 0) {
        if (this.listeDItem[index-1].date == subtitle) {
          return ""
        }
      }
      return subtitle
    }
  }
}
</script>

<style>
  .v-list__tile{
    font-size: 14px;
  }
</style>
