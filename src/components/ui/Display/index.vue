<template>
  <div id="display" height="height">
    <div class="display-section" v-if="playerturn"></div>
    <div class="display-text" v-if="playerturn">
        Player Phase
    </div>
    <div class="display-section" v-if="playerturn"></div>

    <div class="display-section" v-if="!playerturn"></div>
    <div class="display-text" v-if="!playerturn">
        Enemy Phase
    </div>
    <div class="display-section" v-if="!playerturn"></div>
  </div>
</template>

<script>
export default {
  name: 'Display',
  props: ['playerturn'],
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = document.getElementById('game').clientHeight;
  },
  updated() {
    if(!this.playerturn) {
      this.$store.dispatch('startEnemyActions');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
