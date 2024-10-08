const express= require("express");
const app=express();
const mongoose=require("mongoose"); 
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
const expresserr=require("./expresserr.js");

main()
.then(()=>{
    console.log("mongodb connected");
}).catch((err)=>console.log(err)
    
);

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/",(req,res)=>{
    res.send("this is home route");
})

app.get("/chats",async(req,res,next)=>{
    try{
         let chats=await chat.find();
    res.render("index.ejs",{chats});
    } catch(err){
        next(err);
    };
   
})
//new route
app.get("/chats/new",(req,res)=>{
   res.render("new.ejs");
})
//create route
app.post("/chats",(req,res,next)=>{
    try{
        let{from,to,msg}=req.body;
        let newchat=new chat({
            from:from,
            to:to,
            msg:msg,
            createdat:Date(),
     })
        newchat.save().then((res)=>{console.log("chat was saved")}).catch((err)=>{
            console.log(err);
        })
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
        
})
//edit route
app.get("/chats/:id/edit",async(req,res,next)=>{
   try{
    let {id}=req.params;
   let chats = await chat.findById(id);
   if(!chats){
   next( new expresserr(300,"id is not found"));
   }
   res.render("edit.ejs",{chats});
   }catch(err){
    next(err);
   }
   
})

//update route
app.put("/chats/:id",async(req,res,next)=>{
    try{
         let {id}=req.params;
    let{msg:newMsg}=req.body;
    console.log(newMsg)
    let updatedchat=await chat.findByIdAndUpdate(
        id,{msg:newMsg},
         {runValidators:true,new:true});
         console.log(updatedchat);
         res.redirect("/chats");
    }catch(err){
        next(err);
    }
   
})
//delete route
app.delete("/chats/:id",async(req,res,next)=>{
    try{
        let {id}=  req.params;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats");
    console.log("chat was deleted");
    }catch(err){
        next(err);
    }
    
    
})

//err handeling
app.use((err,req,res,next)=>{
    let{status=400,message="some err is generate"}=err;
    res.status(status).send(message);
    console.log(message);
})

app.listen(8080,()=>{
    console.log("app is listning on port 8080");
})