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

<template>
  <td :class="{ movetile: movetile, atktile: atktile }">
    <Character :class="char.class" v-if="char"></Character>
    <Selector v-if="selected"></Selector>
  </td>
</template>
