import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());// use before everymiddleware

import router from "./router/router.js";
import blogrouter from "./router/post/router.js";

app.use(bodyParser.json()); // when sending json data drom postman;
// app.use(express.json);
// app.use(express.urlencoded({extended:false}))// when sending html data from webpage
app.use("/api/user",router);
app.use("/api/blog",blogrouter);
import "./db/conn.js"




if(process.env.NODE_ENV == "production"){
    app.use(express.static("/client/frontend/build"))
}

app.get('*',(req,res)=>{
    res.sendFile(path.join(_dirname,'/client/frontend/build','index.html'));
})


app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
})