<template src="./app.html"></template>

<script>
import selector from './components/Selector/Selector'

export default {
  name: 'app',
  data () {
    return {
      ppr: 0,
      ppc: 0
    }
  },
  components: {
    'selector': selector
  },
  mounted () {
    var el = document.getElementById('app');
    var scaleRatio = window.innerWidth <= 500 ? window.innerWidth / el.clientWidth : 500 / el.clientWidth;
    console.log(scaleRatio);
    el.style.transform = 'scale(' + scaleRatio + ')';
    console.log(document.querySelectorAll('#app'));
    el.focus();
  },
  methods: {
    moveUp: function(e) {
      console.log('Move Up');
      console.log(e);
    }
  }
}
</script>

<style lang="scss" src="./app.scss"></style>
