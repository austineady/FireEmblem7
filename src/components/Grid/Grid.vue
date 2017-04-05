<template src="./template.html"></template>

<script>
import map from '../../data/Map_0.js'
import tile from '../Tile/Tile'
import lyn from '../Lyn/Lyn.js'

export default {
  name: 'grid',
  data () {
    return {
      map: map,
      totalRows: 10,
      totalCols: 15,
      lyn: lyn
    }
  },
  components: {
    'Tile': tile
  },
  mounted () {
    console.log(document.getElementById('grid'));
  },
  methods: {
    register: function(row, col) {
      console.log('Row');
      console.log(row);
      console.log('Col');
      console.log(col);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
