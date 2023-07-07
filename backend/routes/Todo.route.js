const express = require('express');
const { Todomodel } = require('../Models/Todo.model');

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
    try {
        const todos = await Todomodel.find();
        res.status(200).send(todos)
    }
    catch (err) {
        console.log(err);
        res.status(404).send("Error")
    }

})

todoRouter.post("/create", async (req, res) => {
    const { taskname, status, tag } = req.body;
    const ownID = req.userID

    const new_todo = new Todomodel({
        taskname,
        status,
        tag,
        ownID
    })
    await new_todo.save();
    res.status(200).send({"message" : "Todo created successfully"})
})

todoRouter.delete("/delete/:todoID" , async(req, res) => {
    const {todoID} = req.params;
    const userID = req.userID;     // current user
    
    const todo = await Todomodel.findOne({_id :todoID})
    const ownID = todo.ownID;

    if(ownID === userID){
        await Todomodel.findOneAndDelete({_id :todoID})
        res.status(200).send("Todo deleted successfully")
    }
    else{
        res.status(404).send("You are not allowed to delete this task")
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