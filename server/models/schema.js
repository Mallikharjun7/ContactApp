const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },

        number:
        {
            type:Number,
            required:true,
        },
        relation:{
            type:String,
            required:true
        },
        village:{
            type:String,
            required:true
        }
    }
);
const ContactUser=mongoose.model('ContactUser',userSchema);
module.exports=ContactUser;