const Sequelize = require('sequelize');

const sequelize = require('../util/databse');

const Expense = sequelize.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    expense:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
    type:Sequelize.STRING,
    allowNull:false
    }
   });
   module.exports=Expense;