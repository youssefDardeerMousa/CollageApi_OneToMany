import { Router } from "express";
import { departmentUpdated, departmentdeleted, departmentget, departmentgetbyid, departmentpost } from "./department.controller.js";
const Departmentrouter=Router();
// departmentgetbyid
Departmentrouter.post("/",departmentpost)
Departmentrouter.get("/",departmentget)
Departmentrouter.get("/:id",departmentgetbyid)
Departmentrouter.delete("/:id",departmentdeleted)
Departmentrouter.put("/:id",departmentUpdated)


export default Departmentrouter