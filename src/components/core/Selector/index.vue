<template>
  <div id="selector">
    <div id="select-top"></div>
    <div id="select-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'selector'
}
</script>

<style lang="scss">
#selector {
  display: block;
  height: 16px;
  left: 0;
  position: absolute;
  top: 0;
  width: 16px;
  z-index: 100;
}

#select-top {
  display: block;
  height: 50%;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    border-top: 1px solid white;
    content: "";
    display: block;
    height: 4px;
    position: absolute;
    top: 0;
    width: 4px;
  }

  &:before {
    border-left: 1px solid white;
    left: 0;
  }

  &:after {
    border-right: 1px solid white;
    right: 0;
  }
}

#select-bottom {
  display: block;
  height: 50%;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    border-bottom: 1px solid white;
    bottom: 0;
    content: "";
    display: block;
    height: 4px;
    position: absolute;
    width: 4px;
  }

  &:before {
    border-left: 1px solid white;
    left: 0;
  }

  &:after {
    border-right: 1px solid white;
    right: 0;
  }
}
</style> 
