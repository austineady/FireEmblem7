<template src="./template.html"></template>

<script>
import tools from '@/tools/tools.js';
import Grid from '@/components/core/Grid';

import Hud from '@/components/ui/Hud';
import TileInfo from '@/components/ui/TileInfo';

export default {
  name: 'Game',
  data () {
    return {
      grid: Grid
    }
  },
  props: ['char', 'selected', 'tile', 'map'],
  mounted: function() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      self.$store.dispatch('handleMove', {
        coords: self.selected,
        keyCode: e.keyCode
      });
    });
  },
  components: {
    'Grid': Grid,
    'Hud': Hud,
    'TileInfo': TileInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
