<template src="./template.html"></template>

<script>
import tools from '../../tools/tools.js';
import Grid from '../Grid/Grid';
import Selector from '../Selector/Selector';

export default {
  name: 'Game',
  data () {
    return {
      selector: Selector,
      grid: Grid
    }
  },
  components: {
    'Grid': Grid,
    'Selector': Selector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
