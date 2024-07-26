const express = require("express");
const passport = require("passport");
const AuthController = require("../../controllers/AuthController");
const UserController = require("../../controllers/UserController");
const CourseController = require("../../controllers/CourseController");
const EnrollmentController = require("../../controllers/EnrollmentController");
const RoleController = require("../../controllers/RoleController");

const router = express.Router();

// Rutas de autenticación
router.post("/login", AuthController.login);
router.post("/register", AuthController.registerUser);

// Rutas de usuarios
router.get("/usuarios", UserController.getAllUsers);
router.get("/usuarios/:id", UserController.getUserById);
router.post("/usuarios", UserController.createUser);
router.put("/usuarios/:id", UserController.updateUser);
router.delete("/usuarios/:id", UserController.deleteUser);

// Rutas de cursos
router.get("/cursos", CourseController.getAllCourses);
router.get("/cursos/:id", CourseController.getCourseById);
router.post("/cursos", CourseController.createCourse);
router.put("/cursos/:id", CourseController.updateCourse);
router.delete("/cursos/:id", CourseController.deleteCourse);

// Rutas de inscripciones
router.get("/inscripciones", EnrollmentController.getAllEnrollments);
router.get("/inscripciones/:id", EnrollmentController.getEnrollmentById);
router.post("/inscripciones", EnrollmentController.createEnrollment);
router.put("/inscripciones/:id", EnrollmentController.updateEnrollment);
router.delete("/inscripciones/:id", EnrollmentController.deleteEnrollment);

// Rutas de roles
router.get("/roles", RoleController.getAllRoles);
router.get("/roles/:id", RoleController.getRoleById);
router.post("/roles", RoleController.createRole);
router.put("/roles/:id", RoleController.updateRole);
router.delete("/roles/:id", RoleController.deleteRole);

module.exports = router;
