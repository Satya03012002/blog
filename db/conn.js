import mongoose from "mongoose";


const CONNECTION_URL =  "mongodb+srv://traveldairies:123123123@cluster0.7qel1.mongodb.net/mernyoutube?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() =>{
     console.log("mongodb connection successful")
}).catch((err) =>{
    console.log(err.message)
});
// mongoose.connect("mongodb://localhost:27017/satyaform",{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=>{
//     console.log("connection successful from mongoose")
// }).catch((err)=>{
//     console.log(err)
// })

//useFindAndModify: false