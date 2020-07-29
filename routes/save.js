var express = require('express');
var router = express.Router();
var databaseConnection = require('../databaseModel')

router.post('/:id', async (req, res) => {
    res.status(200).json( "success" )
    console.log(req)
    // databaseConnection.save(req)
    
  });

  router.get('/:id', async (req, res) => {
    databaseConnection.getSave(req.params.id).then(function(save) {
        res.status(200).json( save )  
    })  
  });

module.exports = router