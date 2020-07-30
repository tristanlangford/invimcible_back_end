var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", async (req, res) => {
  if (req.params.id === "1" || req.params.id === "2") {
    index = req.params.id - 1;
    res.status(200).json(addData(levels[index]));
  } else {
    console.log("404");
    res.status(404).json(null);
  }
});

var level1 = [
  [
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "WF",
    "WF",
    "WF",
    "WF",
    "W1",
    "WD",
    "WD",
    "WD",
  ],
  [
    "BS",
    "VS",
    "C2",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BR",
    "BR",
    "BR",
    "BR",
    "BS",
    "W4",
    "WU",
    "WU",
    "WU",
    "WU",
    "W4",
    "W",
    "W",
  ],
  [
    "BS",
    "PR",
    "GC",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "C2",
    "W4",
    "WU",
    "WU",
  ],
  [
    "BS",
    "C4",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PR",
    "PL",
    "WR",
    "WD",
    "WD",
  ],
  [
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "BS",
    "PR",
    "PL",
    "WR",
    "W",
    "W",
  ],
  [
    "BS",
    "BS",
    "C1",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "E",
    "BS",
    "BS",
    "PR",
    "PL",
    "W4",
    "WU",
    "WU",
  ],
  [
    "BS",
    "BS",
    "PR",
    "PL",
    "BT",
    "BT",
    "BT",
    "BT",
    "BT",
    "BR",
    "BR",
    "BR",
    "BS",
    "W1",
    "WD",
    "WD",
    "WD",
    "W2",
    "PR",
    "S1",
    "S1",
    "S1",
    "I1",
  ],
  [
    "BS",
    "BS",
    "PR",
    "PL",
    "BT",
    "BT",
    "BT",
    "BT",
    "BT",
    "BT",
    "BT",
    "BS",
    "BS",
    "WR",
    "W",
    "W",
    "W",
    "WL",
    "PR",
    "PL",
    "B",
    "B",
    "B",
  ],
  [
    "BS",
    "BS",
    "PR",
    "PL",
    "BS",
    "BS",
    "BS",
    "BT",
    "BT",
    "BT",
    "BS",
    "BS",
    "BS",
    "W4",
    "WU",
    "WU",
    "WU",
    "W3",
    "PR",
    "PL",
    "B",
    "B",
    "BS",
  ],
  [
    "BS",
    "BS",
    "PR",
    "B",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PD",
    "PL",
    "B",
    "B",
    "BS",
  ],
  [
    "BS",
    "BS",
    "C4",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "PU",
    "C3",
    "B",
    "B",
    "B",
  ],
  [
    "WD",
    "W2",
    "W1",
    "WD",
    "W2",
    "BT",
    "BT",
    "BT",
    "BT",
    "BT",
    "BS",
    "BS",
    "BS",
    "BR",
    "BR",
    "BR",
    "BR",
    "BS",
    "B",
    "B",
    "B",
    "BS",
    "BS",
  ],
  [
    "W",
    "WL",
    "WR",
    "W",
    "WL",
    "BT",
    "BT",
    "BT",
    "BT",
    "BS",
    "B",
    "B",
    "B",
    "B",
    "BT",
    "BT",
    "BT",
    "BS",
    "B",
    "B",
    "BT",
    "BT",
    "BT",
  ],
];

// key:
// VS = starting point
// E = End

// WF = waterfall

// B = blocker bush -- correcc tile sorted
// BR = blocker Rock
// BT = blocker Tree
// BS = blocker stump

// S1 = small path horizontal
// S2 = small path vertical

// PU = path up (path on top, grass on bottom)
// PD = path down (path on bottom, grass on top)
// PR = path right (path on right, grass on left)
// PL = path left (path on left, grass on right)

// WU = water up (path on top, grass on bottom)
// WD = water down (path on bottom, grass on top)
// WR = water right (path on right, grass on left)
// WL = water left (path on left, grass on right)

// C1 = NW
// C2 = NE
// C3 = SE
// C4 = SW
// GC = grass corner

// W1 = NW
// W2 = NE
// W3 = SE
// W4 = SW

var level2 = [
  [
    "SB",
    "SB",
    "SB",
    "B",
    "B",
    "B",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "BB",
    "SPD",
    "SPD",
    "SPD",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "B",
    "B",
    "B",
    "SPR",
    "SPL",
    "SPU",
    "PB",
    "SPU",
    "SPU",
    "BB",
    "SPU",
    "SC2",
    "SC1",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "B",
    "B",
    "B",
    "SPR",
    "SPL",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "SC3",
    "SPL",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "I3",
    "SPU",
    "SPU",
    "SPU",
    "SC4",
    "SPL",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "B",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "BF",
    "BF",
    "BF",
    "BB",
    "BB",
    "BB",
    "VS",
    "SPL",
    "SPD",
    "SPD",
    "SPD",
    "SPD",
    "BB",
    "SC3",
    "SC4",
    "BB",
    "BB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "BF",
    "BF",
    "BF",
    "SC4",
    "SPU",
    "SPU",
    "SPU",
    "SC2",
    "SC1",
    "SPU",
    "SPU",
    "BB",
    "BB",
    "SPU",
    "SPU",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
  [
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SPR",
    "SPL",
    "SPR",
    "SPL",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
    "SB",
  ],
];

// key:

// VS = starting point
// E = End

// SC1 = NW
// SC2 = NE
// SC3 = SE
// SC4 = SW
// SC = street corner

// SPU = road up (road on top, street on bottom)
// SPD = road down (road on bottom, street on top)
// SPR = road right (road on right, street on left)
// SPL = road left (road on left, street on right)

// BB = blocker bin
// BP = blocker Post box
// BT = blocker Tree
// BS = blocker stump
//SB = street blocker

var levels = [level1, level2];

function addData(level) {
  var arr = [];
  for (var i = 0; i < level.length; i++) {
    var subArray = [];
    for (var j = 0; j < level[i].length; j++) {
      if (level[i][j] === "B") {
        var value = level[i][j];
        var x = 32 * 7;
        var y = 32 * 1;
        var blocked = true;
      } else if (level[i][j] === "BR") {
        var value = level[i][j];
        var x = 32 * 7;
        var y = 32 * 0;
        var blocked = true;
      } else if (level[i][j] === "BT") {
        var value = level[i][j];
        var x = 32 * 6;
        var y = 32 * 0;
        var blocked = true;
      } else if (level[i][j] === "BS") {
        var value = level[i][j];
        var x = 32 * 6;
        var y = 34 * 1;
        var blocked = true;
      } else if (level[i][j] === "S1") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 0;
        var blocked = false;
      } else if (level[i][j] === "E") {
        var value = level[i][j];
        var x = 32 * 4;
        var y = 32 * 2;
        var blocked = false;
      } else if (level[i][j] === "W") {
        var value = level[i][j];
        var x = 32 * 1;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "PU") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 1;
        var blocked = false;
      } else if (level[i][j] === "PD") {
        var value = level[i][j];
        var x = 32 * 5;
        var y = 32 * 1;
        var blocked = false;
      } else if (level[i][j] === "PR") {
        var value = level[i][j];
        var x = 32 * 1;
        var y = 32 * 1;
        var blocked = false;
      } else if (level[i][j] === "PL") {
        var value = level[i][j];
        var x = 32 * 4;
        var y = 32 * 1;
        var blocked = false;
      } else if (level[i][j] === "WU") {
        var value = level[i][j];
        var x = 32 * 4;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "WD") {
        var value = level[i][j];
        var x = 32 * 1;
        var y = 32 * 2;
        var blocked = true;
      } else if (level[i][j] === "WR") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "WL") {
        var value = level[i][j];
        var x = 32 * 2;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "WF") {
        var value = level[i][j];
        var x = 32 * 2;
        var y = 32 * 1;
        var blocked = true;
      } else if (level[i][j] === "C1") {
        var value = level[i][j];
        var x = 32 * 6;
        var y = 32 * 2;
        var blocked = false;
      } else if (level[i][j] === "C2") {
        var value = level[i][j];
        var x = 32 * 7;
        var y = 32 * 2;
        var blocked = false;
      } else if (level[i][j] === "C3") {
        var value = level[i][j];
        var x = 32 * 7;
        var y = 32 * 3;
        var blocked = false;
      } else if (level[i][j] === "C4") {
        var value = level[i][j];
        var x = 32 * 6;
        var y = 32 * 3;
        var blocked = false;
      } else if (level[i][j] === "GC") {
        var value = level[i][j];
        var x = 32 * 5;
        var y = 32 * 0;
        var blocked = false;
      } else if (level[i][j] === "W1") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 2;
        var blocked = true;
      } else if (level[i][j] === "W2") {
        var value = level[i][j];
        var x = 32 * 2;
        var y = 32 * 2;
        var blocked = true;
      } else if (level[i][j] === "W3") {
        var value = level[i][j];
        var x = 32 * 5;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "W4") {
        var value = level[i][j];
        var x = 32 * 3;
        var y = 32 * 3;
        var blocked = true;
      } else if (level[i][j] === "SB") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 6;
        var blocked = true;
      } else if (level[i][j] === "SPD") {
        var value = level[i][j];
        var x = 32 * 3;
        var y = 32 * 7;
        var blocked = false;
      } else if (level[i][j] === "SPU") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 7;
        var blocked = false;
      } else if (level[i][j] === "BB") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 4;
        var blocked = true;
      } else if (level[i][j] === "I3") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 5;
        var blocked = true;
      } else if (level[i][j] === "I2") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 5;
        var blocked = true;
      } else if (level[i][j] === "I1") {
        var value = level[i][j];
        var x = 32 * 0;
        var y = 32 * 5;
        var blocked = true;
      } else if (level[i][j] === "SPR") {
        var value = level[i][j];
        var x = 32 * 5;
        var y = 32 * 4;
        var blocked = false;
      } else if (level[i][j] === "SPL") {
        var value = level[i][j];
        var x = 32 * 2;
        var y = 32 * 7;
        var blocked = false;
      } else if (level[i][j] === "BF") {
        var value = level[i][j];
        var x = 32 * 4;
        var y = 32 * 7;
        var blocked = true;
      } else if (level[i][j] === "SC1") {
        var value = level[i][j];
        var x = 32 * 6;
        var y = 32 * 4;
        var blocked = false;
      } else if (level[i][j] === "SC2") {
        var value = level[i][j];
        var x = 32 * 7;
        var y = 32 * 4;
        var blocked = false;
      } else if (level[i][j] === "SC3") {
        var value = level[i][j];
        var x = 32 * 4;
        var y = 32 * 4;
        var blocked = false;
      } else if (level[i][j] === "SC4") {
        var value = level[i][j];
        var x = 32 * 1;
        var y = 32 * 7;
        var blocked = false;
      } else {
        var value = level[i][j];
        var x = 32;
        var y = 32;
        var blocked = false;
      }
      if (level[i][j] === "VS") {
        var starting = {
          x: j,
          y: i,
        };
      }
      var object = { value: value, x: x, y: y, blocked: blocked };
      subArray.push(object);
    }
    arr.push(subArray);
  }
  output = {
    startingPoint: starting,
    mapArray: arr,
  };
  return output;
}

var level1Data = addData(level1);
var level2Data = addData(level2);

module.exports = router;
module.exports.addData = addData;
