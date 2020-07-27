var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({ levelData, level2 })
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

function addData(){
  var arr = []
for (var i=0; i < level1.length; i++) {
    for (var j=0; j < level1[i].length; j++) {
    if ((level1[i][j]) === "B"){
      var value = level1[i][j]
      var x = 32
      var y = 32
      var blocked = true
    }
    else if ((level1[i][j]) === "F1"){
      var value = level1[i][j]
      var x = 10
      var y = 10
      var blocked = false
    }
    else if ((level1[i][j]) === "P1"|| (level1[i][j]) === "P2"){
      var value = level1[i][j]
      var x = 15
      var y = 15
      var blocked = true

    }
    else {
      var value = level1[i][j]
      var x = 30
      var y = 30
      var blocked = false

    }
    var object = {value: value, x:x, y:y, blocked: blocked}
    arr.push(object)
  }
}
return arr
}

var levelData = addData()

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



module.exports = router;
