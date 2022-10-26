const express = require('express');
const router = express.Router();
const userController = require('../controller/user')
router.get('/get-expense',userController.getExpense);
router.post('/add-expense',userController.postAddExpense);
router.delete('/delete-expense/:id',userController.delete);
module.exports=router;
