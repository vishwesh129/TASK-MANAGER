const express = require('express');
const { Todomodel } = require('../Models/Todo.model');

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
    try {
        console.log("req is" , req.body);
        const todos = await Todomodel.find({ownID : req.body.userID});
        res.status(200).send(todos)
    }
    catch (err) {
        console.log(err);
        res.status(404).send({"msg" : "Please Login Bro"})
    }

})

todoRouter.post("/create", async (req, res) => {
    const { desc, status, date } = req.body;
    const ownID = req.body.userID

    const new_todo = new Todomodel({
        desc,
        status,
        date,
        ownID
    })
    await new_todo.save();
    res.status(200).send({"message" : "Todo created successfully" , new_todo})
})

todoRouter.delete("/delete/:todoID" , async(req, res) => {
    const {todoID} = req.params;
    const userID = req.body.userID;     // current user
    
    const todo = await Todomodel.findOne({_id :todoID})
    const ownID = todo.ownID;

    console.log(ownID);
    console.log(userID);

    if(ownID === userID){
        await Todomodel.findOneAndDelete({_id :todoID})
        res.status(200).send({"msg" : "Todo deleted successfully"})
    }
    else{
        res.status(404).send({"msg" : "You are not allowed to delete this task"})
    }
})

todoRouter.patch("/update/:todoID", async (req, res) => {
    const {todoID} = req.params;
    const updated_todo = await Todomodel.findOneAndUpdate({_id : todoID , userID : req.body.userID} , {...req.body})

    if(updated_todo) {
        res.status(200).send("Todo Updated successfully")
    }
    else{
        res.status(404).send("You are not allowed to edit this todo");
    }
})


module.exports = { todoRouter }