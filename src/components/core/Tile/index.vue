<template src="./template.html"></template>

<script>
import Character from '@/components/core/Character';
import Selector from '@/components/core/Selector';

export default {
  name: 'tile',
  props: ['ter', 'row', 'col', 'char', 'movetile', 'atktile', 'selected'],
  components: {
    'Character': Character,
    'Selector': Selector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
