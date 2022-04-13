
const mongoose=require("mongoose");


const dataSchema=new mongoose.Schema({

  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },

  type:{
    type:String,
    required:true
  }

})

const data=new mongoose.model("data",dataSchema);
module.exports=data;
