<template>
  <v-list two-line>
    <v-subheader
    >
      {{ title }}
    </v-subheader>

    <div v-for="(item, index) in derouleLaListe" :key="item.date + index">
      <v-list-tile>

        <v-list-tile-content :key="item.date + index">
          {{ item.date }}
        </v-list-tile-content>

        <v-list-tile-content  :key="item.date + index">
          <v-list-tile-title>{{ item.description }}</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
    </div>
  </v-list>
</template>

<script>
export default {
  name: 'listeDuCv',
  props: [ 'listeDItem', 'title'],
  computed: {
    derouleLaListe() {
        return this.listeDItem
    }
  }
}
</script>
