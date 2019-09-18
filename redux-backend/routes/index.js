var express = require('express');
var router = express.Router();

router.get('/dairy-inv',(req, res, next)=>{
  const seedData = [
    {
        food: 'cheese',
        quantity: 120,
    },
    {
        food: 'milk',
        quantity: 37,
    },
    {
        food: 'yogurt',
        quantity: 75
    },
    {
        food: 'kefir',
        quantity: 3,
    },
  ]
  res.json(seedData);
})



module.exports = router;
