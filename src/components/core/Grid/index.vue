<template>
  <table id="grid">
    <tr class="row" v-for="(row, idx) in map">
      <Tile
      class="col"
      v-for="(col, index) in row"
      v-bind:id="col.tid"
      v-bind:ter="col.ter"
      v-bind:key="col.tid"
      v-bind:char="col.char"
      v-bind:row="idx"
      v-bind:col="index"
      v-bind:movetile="moving === true ? col.moveTile : false"
      v-bind:atktile="moving === true ? col.atkTile : false"
      v-bind:selected="index === selected[1] && idx === selected[0] ? true : false"
      ></Tile>
    </tr>
  </table>
</template>

<script>
import tile from '@/components/core/Tile';

export default {
  name: 'grid',
  props: ['selected', 'map'],
  computed: {
    moving() {
      return this.$store.state.moving;
    }
  },
  mounted() {
    console.log('Store: ');
    console.log(this.$store);
  },
  components: {
    'Tile': tile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
