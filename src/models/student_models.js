const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String, // Set the type to String
    required: true,
    minlength: 3,
  },
  email: {
    type: String, // Set the type to String
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: "Invalid email",
    },
  },
  phone: {
    type: Number, // Set the type to Number
    validate: {
      validator: (value) => {
        // Custom validation to check if it's a 10-digit number
        return /^[0-9]{10}$/.test(value);
      },
      message: "Invalid phone number (must be 10 digits)",
    },
    required: true,
    unique: true,
  },
  address: {
    type: String, // Set the type to String
    required: true,
  },
});

// we will create a new collection

// It creates a Mongoose model named "Student" based on the schema and exports it for use in other parts of your application.
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

