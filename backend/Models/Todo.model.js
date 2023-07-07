const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    taskname : {type : String , required : true},
    status  : {type : String , enum : ["pending", "done"], required : true},
    tag : {type : String , enum : ["personal", "official", "family"], required : true},
    ownID : String
})
const Todomodel = mongoose.model("todo" , todoSchema);


module.exports = {Todomodel}