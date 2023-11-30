import express from 'express'
import { connectDB } from './DB/models/connection.js'
import Departmentrouter from './src/modules/Departments/department.router.js'
import employeerouter from './src/modules/Employees/employee.router.js'
const app = express()
app.use(express.json())
app.use("/Department",Departmentrouter)
app.use("/employee",employeerouter)
connectDB()

app.all("*",(req,res)=>{
    res.json({result:false,status:404,message:"This Page Not Found"})
})

app.listen(3300,()=>{
    console.log(`server is running on 3300`);
})