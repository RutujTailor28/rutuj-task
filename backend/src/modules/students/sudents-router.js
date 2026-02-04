const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");

router.get("", studentController.handleGetAllStudents);
router.post("", studentController.handleAddStudent);
router.get("/:id", studentController.handleGetStudentDetail);
router.put("/:id", studentController.handleUpdateStudent);
router.delete("/:id", studentController.handleDeleteStudent);
router.post("/:id/status", studentController.handleStudentStatus);

module.exports = { studentsRoutes: router };
