const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    desc : {type : String , required : true},
    status  : {type : String , enum : ["pending", "completed"], required : true},
    date : {type : Date, default:Date.now},
    ownID : String
})
const Todomodel = mongoose.model("todo" , todoSchema);


module.exports = {Todomodel}