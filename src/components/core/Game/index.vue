<template src="./template.html"></template>

<script>
import tools from '@/tools/tools.js';
import Grid from '@/components/core/Grid';

import Hud from '@/components/ui/Hud';
import TileInfo from '@/components/ui/TileInfo';
import UserMenu from '@/components/ui/UserMenu';
import Display from '@/components/ui/Display';

export default {
  name: 'Game',
  data () {
    return {
      grid: Grid
    }
  },
  props: ['char', 'selected', 'tile', 'map', 'playerturn', 'menuactive'],
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
    'TileInfo': TileInfo,
    'UserMenu': UserMenu,
    'Display': Display
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
