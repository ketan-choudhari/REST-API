const express= require("express");
const router= new express.Router();
const Student = require("../models/student");

// 2. We need to define the router
router.get("/thapa",(req,res)=>{
    res.send("Hello Guys")
 })


 


//create a new students

//we are doing this my using Promises

/*app.post("/student", async (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);

  user.save()
    .then(() => {
      res.status(201);
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});      */
 

//we are doing this my using Async-Await

router.post("/student",async(req,res) =>{

    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);

    }catch(e){ res.status(400).send(e);

    }
 })
 

 // Read the data of registered students
router.get("/students",async(req,res) =>{
    try{
 const studentsData=await Student.find();
 res.send(studentsData);                                                      
    }catch(e){
        res.send(e);
    }
})
// Read the data of Individual Student
router.get("/student/:id",async(req,res) =>{
    try{
        const _id=req.params.id;
        const studentData= await Student.findById(_id);
        console.log(studentData)

        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }
       
    }catch(e){
        res.status(500).send(e);
    }
})


//delete the student by ID
router.delete("/student/:id",async(req,res)=>{
    try{
        const deleteStudents=await Student.findByIdAndDelete(req.params.id)

        if(!req.params.id){
            return res.status(400).send();
        }
        else{
            res.send(deleteStudents);
        }

    }catch(e){
  res.status(500).send(e);
    }
})



// Update the studentss by ID
router.patch("/student/:phone",async(req,res)=>{

try{
    const _id=req.params.phone;
    const UpdateStudents=await Student.findByIdAndUpdate(_id,req.body,{
        new:true
    })

    res.send(UpdateStudents);
    }
    catch(e){
res.status(404).send(e);
}
})
 
 module.exports = router;

