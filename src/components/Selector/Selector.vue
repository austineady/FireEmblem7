<template src="./template.html"></template>

<script>
import map from '../../data/Map_0.js';

export default {
  name: 'selector',
  data () {
    return {
      coords: [0, 0],
      row: 8,
      col: 13,
      left: 0,
      top: 0
    }
  },
  mounted () {
    this.coords = [8, 13];
    document.addEventListener('keyup', this.handleMove);
  },
  watch: {
    coords: function(val) {
      this.$el.style.left = this.coords[1] * 16 + 'px';
      this.$el.style.top = this.coords[0] * 16 + 'px';
    }
  },
  methods: {
    handleMove: function(e) {
      var newRow;
      var newCol;
      if(e.keyCode === 38) {
        // move up
        newRow = this.coords[0] - 1 >= 0 ? this.coords[0] - 1 : this.coords[0];
        this.coords = [newRow, this.coords[1]];
      } else if(e.keyCode === 40) {
        // move down
        newRow = this.coords[0] + 1 <= 10 ? this.coords[0] + 1 : this.coords[0];
        this.coords = [newRow, this.coords[1]];
      } else if(e.keyCode === 39) {
        // move right
        newCol = this.coords[1] + 1 <= 15 ? this.coords[1] + 1 : this.coords[1];
        this.coords = [this.coords[0], newCol];
      } else if(e.keyCode === 37) {
        // move left
        newCol = this.coords[1] - 1 >= 0 ? this.coords[1] - 1 : this.coords[1];
        this.coords = [this.coords[0], newCol];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
