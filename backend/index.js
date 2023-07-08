const express = require('express');
require("dotenv").config();
var cors = require('cors')
const { userRouter } = require("./routes/User.route");
const { connection } = require('./configs/db');
const {authenticate} = require("./middlewares/authentication");
const { todoRouter } = require('./routes/Todo.route');

const app = express();

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/user" , userRouter)

app.use("/todo" , authenticate , todoRouter);

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