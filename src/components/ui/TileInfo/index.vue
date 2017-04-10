<template>
  <div id="tile-info" v-if="tile.ter">
    <h5 class="tile-header">
      {{ tile.ter.type }}
    </h5>
    <div class="tile-data">
      <h5 class="tile-heading">
        DEF. <span class="tile-number">{{ tile.ter.def }}</span>
      </h5>
      <h6 class="tile-heading">
        AVO. <span class="tile-number">{{ tile.ter.avo }}</span>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileInfo',
  props: ['tile']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
