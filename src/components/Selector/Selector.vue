<template src="./template.html"></template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'selector',
  computed: mapGetters({
    coords: 'getCoords'
  }),
  methods: mapActions([
    'handleMove'
  ]),
  mounted () {
    document.addEventListener('keydown', this.handleMove);
    this.$el.style.left = this.coords[1] * 16 + 'px';
    this.$el.style.top = this.coords[0] * 16 + 'px';
  },
  watch: {
    coords: function(coords) {
      this.$el.style.left = coords[1] * 16 + 'px';
      this.$el.style.top = coords[0] * 16 + 'px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
