<template src="./template.html"></template>

<script>
import Character from '@/components/core/Character';

export default {
  name: 'tile',
  props: ['ter', 'row', 'col', 'char', 'movetile', 'atktile'],
  components: {
    'Character': Character
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
