const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    paymentType : {type : String , required : true},
    expense : {type : Number , required : true},
    description : {type : String , required : true},
    paymentDate : {type : String},
});

const expenseModel = new mongoose.model("expenses" , expenseSchema);

module.exports = expenseModel;