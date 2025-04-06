const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/Contact',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Momgodb is connected"))
.catch(err=>console.error(err));
