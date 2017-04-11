<template>
  <div id="user-menu" v-show="menuactive">
    <ul class="option-list">
      <li :id="option" class="option" v-for="(option, index) in options">{{ option }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  props: ['menuactive'],
  computed: {
    options() {
      return this.$store.state.options;
    }
  },
  updated() {
    var el = [].slice.call(document.querySelectorAll('.option'))[0];
    if(el.classList) {
      el.classList.add('active');
    } else {
      el.className += ' ' + 'active';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss"></style>
