<template>
  <div id="weapon-menu" v-show="attacking">
    <div id="weapon-list" class="ui-menu ui-top-left">
      <ul class="option-list weapon-list">
        <li class="weapon clearfix active" v-for="weapon in weapons">
          <div class="left item" :style="weapon.bg"></div>
          <span>{{ weapon.name }}</span>
          <span class="weapon-menu-usage">{{ weapon.usage }}</span>
        </li>
      </ul>
    </div>

    <div id="weapon-stats" class="ui-bottom-right">
      <div class="mugshot-80" :style="char.images.mug80"></div>
      <div class="ui-menu clearfix">
        <p class="center">Affi</p>
        <div class="clearfix">
          <div class="half left clearfix">
            <p>
              Atk
              <span class="weapon-stat right">9</span>
            </p>

            <p>
              Hit
              <span class="weapon-stat right">106</span>
            </p>
          </div>
          <div class="half right">
            <p>
              Crit
              <span class="weapon-stat right">3</span>
            </p>

            <p>
              Avoid
              <span class="weapon-stat right">23</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeaponMenu',
  props: ['attacking'],
  computed: {
    char() {
      return this.$store.state.activeChar;
    },
    weapons() {
      return this.$store.state.activeChar.inventory.map((item) => {
        if(item.type === 'Weapon') {
          return item;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
