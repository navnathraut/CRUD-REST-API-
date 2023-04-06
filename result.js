import StudentModel from "./student.js";

//get all doc
export const getAllDoc = async (req,res)=>{
    try{ 
        const result=await StudentModel.find();
        res.send(result);
    }catch(error)
    {
        console.log(error);
    }
}

// create doc
export const createDoc = async (req,res)=>{
    try{
        const {name,age,fees} = req.body; 
        const doc = new StudentModel({
            name:name,
            age:age,
            fees:fees
        })
        const result = await doc.save();
        res.status(201).send(result);
    }catch(error)
    {
        console.log(error);
    }
}

//get single doc by id
export const getSingleDocById = async (req,res)=>{
    try{
        const result=await StudentModel.findById(req.params.id);
        res.send(result);
    }catch(error)
    {
        console.log(error);
    }
}

//update data
export const updateDocById = async (req,res)=>{
    try{
        const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body);
        res.send(result);
    }catch(error)
    {
        console.log(error);
    }
}

//delete data
export const deleteDocById = async (req,res)=>{
    try{
        const result=await StudentModel.findByIdAndDelete(req.params.id);
        res.status(204).send(result);
    }catch(error)
    {
        console.log(error);
    }
}