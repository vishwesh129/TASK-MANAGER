const express = require('express');
require("dotenv").config();

const { userRouter } = require("./routes/User.route");
const { connection } = require('./configs/db');
// const { todoRouter } = require('./routes/todo.routes');
const {authenticate} = require("./middlewares/authentication")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/user" , userRouter)

// app.use("/todo" , authenticate , todoRouter);

app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err);
        console.log("Error while connecting to DB")
    }
    console.log(`listening on port localhost:${process.env.PORT}`);
})