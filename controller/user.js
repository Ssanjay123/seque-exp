const Expense = require('../models/expense');

exports.getExpense = (req,res,next)=>{
Expense.findAll().then(response=>{
    res.status(200).json({allExpenses:response})
})
.catch(err=>{
    console.log(err);
})
};

exports.postAddExpense =async (req,res,next)=>{
    try{
        // if(!req.body.description){
        //     throw new Error('Description is mandatory')
        // }
const expense = req.body.expenseAmount;
const description = req.body.desc;
const category = req.body.catg;

const user =await Expense.create({expense:expense,description:description,category:category})
    res.status(201).json({newExpense:user})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}


exports.delete= async (req,res,next)=>{
    try{
    const id = req.params.id;
  const data =  Expense.destroy({where:{id:id}})
      
        res.status(200).json({msg:'successful'})
    }
       catch(err){
        res.status(500).json(err);
       }
 
    }
    