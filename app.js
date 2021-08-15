const express = require("express");
const taskRouter = require("./routes/taskRouter");
const app = express();

// const path=require("path")
// const dotenv = require("dotenv")
// dotenv.config({path: "./config.env"})


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers ,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method")
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/tasks",taskRouter);
app.use("/")



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});