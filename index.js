const express = require('express');
const adminRouter = require('./Routes/Admin');
const connectDatabase = require('./Database');
const cookieParser = require('cookie-parser');
const expenseRouter = require('./Routes/Expense');
const app = express();
require('dotenv').config();
const PORT = parseInt(process.env.PORT); 

connectDatabase();

app.use(express.json());
app.use(cookieParser());

app.use('/admin',adminRouter);
app.use('/expenses' , expenseRouter);

app.listen((PORT) , () => {
    console.log(`AIT Expense Tracker is running at http://localhost:${PORT}`);
})