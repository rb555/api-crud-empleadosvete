import { Router } from "express";
import { getEmployee, createEmployee, updateEmployee, deleteEmployee, getEmployeeById } from "../controllers/employees.controllers.js";

const router = Router()

router.get('/employee', getEmployee)

router.get('/employee/:id', getEmployeeById)

router.post('/employee', createEmployee)

router.patch('/employee/:id', updateEmployee)

router.delete('/employee/:id', deleteEmployee)

export default router