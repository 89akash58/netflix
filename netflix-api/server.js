const express=require("express")
const cors=require("cors")
const {MongoClient}=require("mongodb")

const app=express();
app.use(cors());
app.use(express.json())

MongoClient.connect("mongodb://localhost:27017/netflix", {
   
}).then(()=>{
    console.log("db connected")
})

app.listen(5000, console.log("server started"))