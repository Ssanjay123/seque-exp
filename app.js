const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors')

app.use(cors());

const expenseRoutes = require('./routes/expense');
const sequelize = require('./util/databse');

app.set('views','views');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use('/expense',expenseRoutes);
sequelize.sync().then(res=>{
    app.listen(3000);
}).catch(err=>{
    console.log(err);
    })
