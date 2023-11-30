import { Router } from "express";
import { employeeUpdated, employeedeleted, employeeget, employeegetbyid, employeepost } from "./employee.controller.js";
const employeerouter=Router();
employeerouter.post("/",employeepost)
employeerouter.get("/",employeeget)
employeerouter.get("/:id",employeegetbyid)
employeerouter.delete("/:id",employeedeleted)
employeerouter.put("/:id",employeeUpdated)
export default employeerouter