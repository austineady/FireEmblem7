<template src="./app.html"></template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      ppr: 0,
      ppc: 0
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
    },
    map: function() {
      return this.$store.state.map;
    }
  },
  mounted: function() {
    var el = document.getElementById('app');
    var scaleRatio = window.innerWidth <= 500 ? window.innerWidth / el.clientWidth : 500 / el.clientWidth;
    console.log(scaleRatio);
    el.style.transform = 'scale(' + scaleRatio + ')';
  }
}
</script>

<style lang="scss" src="./app.scss"></style>
