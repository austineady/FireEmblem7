<template src="./app.html"></template>

<script>
import selector from './components/core/Selector'

export default {
  name: 'app',
  data: function() {
    return {
      ppr: 0,
      ppc: 0
    }
  },
  components: {
    'selector': selector
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
