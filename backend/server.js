const dotenv = require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const connectDB = require("./config/connectDB")
const app = express();
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://locahlhost:3000", "https://mern-Taskmanager-app.onrender.com"]
}));
app.use("/api/tasks", taskRoutes);
//const logger = (req, res, next) =>{
//    console.log("Middleware ran");
//    console.log(req.method);
//    next()
//}


// Routes
app.get("/", (req, res)=>{
    res.send("Home Page");
});




const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server Running on ${PORT}`);
    }); 

})
.catch((err) => console.log(err));




//startServer();
