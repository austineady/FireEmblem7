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
  computed: {
    char: function() {
      return this.$store.state.selectedChar;
    },
    selected: function() {
      return this.$store.state.coords;
    },
    tile: function() {
      return this.$store.state.activeTile;
    }
  },
  mounted: function() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      self.$store.dispatch('handleMove', {
        coords: self.selected,
        keyCode: e.keyCode
      });
    });
    this.handleUpdate(this.$el, this.selected);
  },
  watch: {
    selected: function(selected) {
      this.handleUpdate(this.$el, selected);
    }
  },
  methods: {
    handleUpdate: function(el, tile) {
      if(tile.char !== null && this.$store.state.activeChar === null) {
        this.$store.dispatch('setSelectedChar', tile);
      } else if(tile.char === null && this.$store.state.activeChar !== null) {
        this.$store.dispatch('resetSelectedChar');
      }
    }
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
