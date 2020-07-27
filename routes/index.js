var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({ level1Data, level2Data })
});

var level1 = [
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'VS', 'F1', 'F1', 'F1', 'F1', 'I1', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'E', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'P3', 'I3', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'F1', 'F1', 'F1', 'I2', 'P2', 'B'],
  ['B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
]

var level2 = [
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'T', 'P2', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'PB', 'B', 'B', 'B', 'VS', 'I1', 'F1', 'PB', 'F1', 'PB', 'F1', 'F1', 'B'],
  ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
  ['B', 'B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'F1', 'PB', 'F1', 'PB', 'F1', 'PB', 'F1', 'B'],
  ['B', 'B', 'F1', 'F1', 'PB', 'F1', 'PB', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
]

function addData(level) {
  var arr = []
for (var i=0; i < level.length; i++) {
  var subArray = []
    for (var j=0; j < level[i].length; j++) {
    if ((level[i][j]) === "B"){
      var value = level[i][j]
      var x = 32
      var y = 32
      var blocked = true
    }
    else if ((level[i][j]) === "F1"){
      var value = level[i][j]
      var x = 10
      var y = 10
      var blocked = false
    }
    else if ((level[i][j]) === "P1"|| (level[i][j]) === "P2"){
      var value = level[i][j]
      var x = 15
      var y = 15
      var blocked = true

    }
    else {
      var value = level[i][j]
      var x = 30
      var y = 30
      var blocked = false

    }
    var object = {value: value, x:x, y:y, blocked: blocked}
    subArray.push(object)

  }
  arr.push(subArray)
}
return arr
}

var level1Data = addData(level1)
var level2Data = addData(level2)

module.exports= {
  addData: addData,
  router: router
}
