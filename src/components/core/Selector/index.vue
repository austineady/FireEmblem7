<template src="./template.html"></template>

<script>
export default {
  name: 'selector',
  computed: {
    coords: function() {
      return this.$store.state.coords;
    }
  },
  mounted: function() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      self.$store.dispatch('handleMove', {
        coords: self.coords,
        keyCode: e.keyCode
      });
    });
    this.handleUpdate(this.$el, this.coords);
  },
  watch: {
    coords: function(coords) {
      this.handleUpdate(this.$el, coords);
    }
  },
  methods: {
    handleUpdate: function(el, coords) {
      var tile = this.$store.state.map[coords[0]][coords[1]];
      this.$store.dispatch('setActiveTile', tile);
      if(tile.char !== null && this.$store.state.activeChar === null) {
        this.$store.dispatch('setSelectedChar', tile);
      } else if(tile.char === null && this.$store.state.activeChar !== null) {
        this.$store.dispatch('resetSelectedChar');
      }
      el.style.left = coords[1] * 16 + 'px';
      el.style.top = coords[0] * 16 + 'px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
