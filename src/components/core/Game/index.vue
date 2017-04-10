<template src="./template.html"></template>

<script>
import tools from '@/tools/tools.js';
import Grid from '@/components/core/Grid';
import Selector from '@/components/core/Selector';

import Hud from '@/components/ui/Hud';
import TileInfo from '@/components/ui/TileInfo';

export default {
  name: 'Game',
  data () {
    return {
      selector: Selector,
      grid: Grid
    }
  },
  computed: {
    select: function() {
      return this.$store.state.selectedChar;
    },
    tile: function() {
      return this.$store.state.activeTile;
    }
  },
  components: {
    'Grid': Grid,
    'Selector': Selector,
    'Hud': Hud,
    'TileInfo': TileInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
