const dotenv = require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const connectDB = require("./config/connectDB")
const app = express();
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://mern-taskmanager-app.onrender.com/
Access-Control-Allow-Methods: GET, DELETE, POST, PUT, HEAD, OPTIONS
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

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

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
