export default {
  find: function(row, col) {
    return document.getElementById(row + ',' + col);
  },
  getOffset: function(row, col) {
    var tgt = document.getElementById(row + ',' + col);
    return { x: tgt.getAttribute('x'), y: tgt.getAttribute('y') };
  },
  calculateMove: function(c, m) {
    // Current character coords
    var col = c[1];
    var row = c[0];
    var map = m;
    var mv = 5;
    var atk = 1;
    var mvTotal = mv + atk;
    var matrixArr = [];
    var atkArr = [];

    for(var i = 0; i <= mvTotal; i++) {
      for(var idx = 0; idx <= mvTotal; idx++) {
        if(idx + i !== 0) {
          if(idx + i <= mv) {
            // If tile is within move limits
            matrixArr.push([idx, i]);
          } else if(idx + i > mv && idx + i <= mvTotal) {
            // If tile is within attack limits
            atkArr.push([idx, i]);
          }
        }
      }
    }

    var mvMatrix = buildMatrices(matrixArr);
    var atkMatrix = buildMatrices(atkArr);

    function buildMatrices(arr) {
      var arrCache = [];
      var newMatrix = [];
      arr.forEach(function(item) {
        var newItem = [];
        var cacheString = '';
        newItem[0] = col + item[0];
        newItem[1] = row + item[1];
        cacheString = newItem[0] + ', ' + newItem[1];
        if(arrCache.indexOf(cacheString) === -1 && col + item[0] <= 15 - 1 && col + item[0] >= 0 && row + item[1] <= 10 - 1) {
          arrCache.push(cacheString);
          newMatrix.push(newItem);
        }
        newItem = [];
        newItem[0] = col - item[0];
        newItem[1] = row - item[1];
        cacheString = newItem[0] + ', ' + newItem[1];
        if(arrCache.indexOf(cacheString) === -1 && 15 - 1 >= 0 && row - item[1] <= 10 - 1) {
          arrCache.push(cacheString);
          newMatrix.push(newItem);
        }
        newItem = [];
        newItem[0] = col + item[0];
        newItem[1] = row - item[1];
        cacheString = newItem[0] + ', ' + newItem[1];
        if(arrCache.indexOf(cacheString) === -1 && col + item[0] <= 15 - 1 && col + item[0] >= 0 && row - item[1] <= 10 - 1) {
          arrCache.push(cacheString);
          newMatrix.push(newItem);
        }
        newItem = [];
        newItem[0] = col - item[0];
        newItem[1] = row + item[1];
        cacheString = newItem[0] + ', ' + newItem[1];
        if(arrCache.indexOf(cacheString) === -1 && col - item[0] <= 15 - 1 && col - item[0] >= 0 && row + item[1] <= 10 - 1) {
          arrCache.push(cacheString);
          newMatrix.push(newItem);
        }
      })
      return newMatrix;
    }

    mvMatrix = mvMatrix.filter(function(item) {
      if(map[item[1]] !== undefined && map[item[1]][item[0]] !== undefined && map[item[1]][item[0]].ter.collide === true) {
        atkMatrix.push(item);
      } else {
        return item;
      }
    })
    return([mvMatrix, atkMatrix]);
  }
}
