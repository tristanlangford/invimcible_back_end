var express = require('express');
var router = express.Router();

router.post('/:id', async (req, res) => {
    res.status(200).json( "success" )
    
  });

  router.get('/:id', async (req, res) => {
    res.status(200).json( "success" )
    
  });

module.exports = router