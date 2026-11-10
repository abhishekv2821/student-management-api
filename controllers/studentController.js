// const Student = require("../models/Student");
// const getStudents = (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: students
//   });
// };

// const createStudent = (req, res) => {
//   const { name, course } = req.body;

//   const newStudent = {
//     id: students.length + 1,
//     name: name,
//     course: course
//   };
//   students.push(newStudent);

//   res.status(201).json({
//     success: true,
//     message: "Student created succesfully",
//     data: newStudent
//   });

// };

// const getStudentById = (req, res) => {
//   const id = Number(req.params.id);

//   const student = students.find(
//     student => student.id === id
//   );

//   if(!student) {
//     return res.status(404).json({
//       success: false,
//       message: "Student not found"
//     });
//   }

//   res.status(200) ({
//     success: true,
//     data: student
//   });

// };

// const updateStudent = (req, res) => {
//   const id = Number(req.params.id);

//   const student = students.find(
//     student = student.id === id
//   );

//   if(!student) {
//     return res.status(404).json({
//       success: false,
//       message: "Student not found"
//     });
//   }

//   student.name = req.body.name;
//   student.course = req.body.course

//   res.status(200).json({
//     success: true,
//     message: "Student updated successfully",
//     data: student
//   });

// };

// const deleteStudent = (req, res) => {
//   const id = Number(req.params.id);

//   const index = students.findIndex(
//     student => student.id === id
//   );
//   if (index === -1) {
//     return res.status(404).json({
//       success: false, 
//       message: "Student not found"
//     });
//   }

//   student.splice(index, 1);
//   res.status(200).json({
//     success: true,
//     message: "Student deleted successfully"
//   });
// };


// // module.exports = {
// //   getStudents,
// //   createStudent,
// //   getStudentById,
// //   updateStudent,
// //   deleteStudent
// // };
const Student = require("../models/Student");

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      data: students
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    const { name, course } = req.body;

    const newStudent = await Student.create({
      name,
      course
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: newStudent
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        course: req.body.course
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
};