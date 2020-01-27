const express = require('express');
const router = express.Router();
const carController = require('../Controller/car');


router.post('/postCarDetails', carController.postCarDetails);

router.get('/getCarDetails', carController.getCarDetails);

router.post('/updateCarDetails', carController.updateCarDetails);

router.delete('/deleteCarDetails/:id', carController.deleteCarDetails);















module.exports = router;