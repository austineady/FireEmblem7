<template>
  <div id="hud" v-if="char && active">
    <div id="hud-mugshot" v-bind:class="char.mugshot"></div>
    <div id="hud-info">
      <h6 class="hud-name">
        {{ char.displayName }}
      </h6>
      <h6 class="hud-hp-wrap">
        <span class="hud-hp-label">HP</span>
        <span class="hud-hp-number">{{ char.health }}</span>
        <span class="hud-hp-number">/ {{ char.maxHealth }}</span>
      </h6>
      <div class="hud-health-bar">
        <div class="hud-health" :width="char.healthDiff"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hud',
  props: ['char', 'active']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
