export default {
  find: function(row, col) {
    return document.getElementById(row + ',' + col);
  },
  getOffset: function(row, col) {
    var tgt = document.getElementById(row + ',' + col);
    return { x: tgt.getAttribute('x'), y: tgt.getAttribute('y') };
  }
}
