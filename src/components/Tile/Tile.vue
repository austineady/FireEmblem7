<template src="./template.html"></template>

<script>
export default {
  name: 'tile',
  props: ['char', 'terr'],
  data () {
    return {
      x: null,
      y: null
    }
  },
  mounted () {
    this.x = this.$el.offsetLeft;
    this.y = this.$el.offsetTop;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
