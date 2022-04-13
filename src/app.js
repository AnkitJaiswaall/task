
const express=require("express");
const app=express();


require("./db/conn");
const data=require("./models/submit")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine","hbs");

app.get("/",function(req,res){
  res.render("index")
})

app.post("/",async (req,res)=>{
  try{

    const register=new data({
      firstname:req.body.fname,
      lastname:req.body.lname,
      phone:req.body.phone,
      email:req.body.email,
      type:req.body.type
    })
    const registered=await register.save();
    res.status(201).render("success")

  }catch(error){
    res.status(400).send(error)
  }
})


app.listen(3000,function(){
  console.log("App is listening port 3000");
})
