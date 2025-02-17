import express from "express"
import evaluateScores from "../controller/calculate.js"
import { createOrUpdateEmployee, getEmployeeById } from "../controller/handelData.js"
import { login, logout, signup } from "../controller/authController.js"
import { protect } from "../middleware/auth.js"
const router=express.Router()

router.post("/total",evaluateScores)
router.post("/addData",createOrUpdateEmployee)
router.get("/getData/:id",getEmployeeById)

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router

