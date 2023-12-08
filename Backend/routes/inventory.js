const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.post('/add-inventory',inventoryController.addInventory);

router.get('/get-inventories' , inventoryController.getInventory );

router.delete('/delete-inventory/:id' , inventoryController.deleteInventory );

module.exports = router;