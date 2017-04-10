<template src="./template.html"></template>

<script>
import { mapActions } from 'vuex';

import { map, characters } from '@/data/Map_0.js';
import tile from '@/components/core/Tile';

export default {
  name: 'grid',
  data () {
    return {
      map: map,
      totalRows: 10,
      totalCols: 15
    }
  },
  props: ['selected'],
  components: {
    'Tile': tile
  },
  created() {
    this.setMap(map);
  },
  mounted () {
    console.log('Store: ');
    console.log(this.$store);
  },
  methods: {
    register: function(row, col) {
      console.log('Row');
      console.log(row);
      console.log('Col');
      console.log(col);
    },
    ...mapActions([
      'setMap'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
