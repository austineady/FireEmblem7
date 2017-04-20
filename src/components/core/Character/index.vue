<template></template>

<script>
import tools from '@/tools/tools.js';

export default {
  name: 'character',
  props: ['char'],
  computed: {
    coords() {
      return [this.char.row, this.char.col];
    },
    active() {
      return this.$store.state.activeChar !== null && this.$store.state.activeChar.id === this.char.id;
    }
  },
  mounted() {
    this.getMoveMap(this.coords, this.$store.state.map);
  },
  updated() {
    if(this.active === false) {
      this.getMoveMap(this.coords, this.$store.state.map);
    }
  },
  methods: {
    getMoveMap(c, m) {
      this.char.moveMap = tools.calculateMove(c, m);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
