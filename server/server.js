const express=require("express");
const app=express();
const cors=require("cors");

const port=process.env.PORT || 5400;

require("./database/conn");
const contactUser=require("./models/schema");

app.use(express.json());
app.use(cors());


app.post("/Add",async(req,res)=>{
    try
    {
        const postData=new contactUser({
        name:req.body.name,
        number:req.body.number,
        relation:req.body.relation,
        village:req.body.village
    })
    const result=await postData.save();
    console.log(result);
    res.send(result);
    }
    catch(err)
    {
        res.send(err);
    }
})

app.get("/View",async(req,res)=>{
    try
    {
        const result=await contactUser.find();
        res.send(result)

    }
    catch(err)
    {
        res.send(err);
    }
})

app.get("/View/:id",async(req,res)=>{
    try
    {
        const id=req.params.id;
        const findone=await contactUser.findById({_id:id});
        console.log(findone);
        res.send(findone);

    }
    catch(err)
    {
        console.log(err);
        res.send(err);
    }
})

app.delete("/View/:id",async(req,res)=>{
    try 
    {
        const id=req.params.id;
        const deleteone=await contactUser.deleteOne({_id:id});
        console.log(deleteone);
        res.send(deleteone);
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
        
    }
})

app.put("/View/:id",async(req,res)=>{
    try
    {
        const id=req.params.id;
        const {name,number,relation,village}=req.body;
        const updatedata=await contactUser.updateOne({_id:id},{$set:{
            name:name,
            number:number,
            relation:relation,
            village:village
        }})
        res.send(updatedata)

    }
    catch(err)
    {
        res.send(err);

    }
})




app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
