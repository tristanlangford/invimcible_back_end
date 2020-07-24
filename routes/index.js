var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({ level1, level2 })
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

  for (var i=0; i < level1.length; i++) {
    for (var j=0; j < level1[i].length; j++) {
    if ((level1[i][j]) === "B"){
      console.log(level1[i][j])
      var x = 32
    }
    else if ((level1[i][j]) === "F1"){
      console.log(level1[i][j])
    }
    else {
      console.log(level1[i][j])
    }
  }
}


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
