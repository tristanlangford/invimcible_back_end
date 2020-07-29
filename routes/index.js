var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', async (req, res) => {
  if (req.params.id === '1' || req.params.id === '2') {
    index = req.params.id - 1
    res.status(200).json( addData(levels[index]) )
  } else {
    console.log("404")
    res.status(404).json( null )
  }
});

var level1 = [
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'VS', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'I1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'C1', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'C4', 'F1', 'F1', 'F1', 'F1', 'F1', 'E', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'E', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F3', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'C3', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'C2', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B']
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

var levels = [level1, level2]

function addData(level) {
  var arr = []
for (var i=0; i < level.length; i++) {
  var subArray = []
  for (var j=0; j < level[i].length; j++) {	 
    if ((level[i][j]) === "B"){
      var value = level[i][j]
      var x = 32 * 13
      var y = 32 * 6
      var blocked = true
    }	
    else if ((level[i][j]) === "F1"){
      var value = level[i][j]
      var x = 32 * 4
      var y = 32
      var blocked = false
    }
    else if ((level[i][j]) === "P1"|| (level[i][j]) === "P2") {
      var value = level[i][j]
      var x = 32
      var y = 32
      var blocked = true
    }
    else {
      var value = level[i][j]
      var x = 32
      var y = 32
      var blocked = false
    }
    if (level[i][j] === "VS") {	
      var starting = {	
        x: j,	
        y: i	
      }	
    }	
    var object = {value: value, x:x, y:y, blocked: blocked}
    subArray.push(object)


  }
  arr.push(subArray)

}
output = {
  startingPoint: starting,	
  mapArray: arr	
}	
return output	
}

var level1Data = addData(level1)
var level2Data = addData(level2)


module.exports = router
module.exports.addData = addData
