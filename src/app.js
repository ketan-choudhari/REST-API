//  REST API: Representational State Transfer Applicaton programming Interface
// CREATE =POST
// READ= GET
// UPDATE = PUT/PATCH
// DElete= Delete

// 1.Handling POST Request in REST API

// RESTful API for managing student records in a MongoDB database using Mongoose and Express.js.
// Create Your Own RESTFul API Handling POST Request in REST API using NodeJS & MongoDB 2020

const express = require("express");
require("./db/conn"); // Provide the correct relative path
const Student = require("./models/student");
const StudentRouter = require("./routers/student");


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(StudentRouter);


//create a new students
// It defines a route for creating a new student using a POST request. It extracts the student data from the request body, creates a new Student instance, saves it to the database, and responds with the saved student data or an error.
 




app.listen(port, () => {
  console.log(`connection is live http://localhost:${port}/`);
});
