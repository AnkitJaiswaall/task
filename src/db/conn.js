const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/nyuctech",{
  useNewUrlParser:true
}).then(()=>{
  console.log("Successfully connected");
}).catch((e)=>{
  console.log(e);
})
