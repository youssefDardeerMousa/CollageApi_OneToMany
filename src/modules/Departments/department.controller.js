import { departmentModel } from "../../../DB/models/department.model.js"
import { employeeModel } from "../../../DB/models/employee.modle.js"


//postDate
export const departmentpost=async(req,res,next)=>{
  let id=req.body.employeeId
  let idemployee=await employeeModel.findOne({
where:{
  id
}
  })
  if(idemployee==null){
    res.json({status:404,result:false,Message:"this employee is not found"})
  }
  console.log(idemployee);  
  return await departmentModel.create(req.body).then(()=>{
    res.json({status:200,result:true,Message:"Data Send Successfully"})
  }).catch((error)=>{
    res.json({status:404,result:false,Message:error})

  })
}

//GET All Data

export const departmentget=async(req,res)=>{
try {
    let departmentAll= await departmentModel.findAll(
      {
        include:{
          model:employeeModel
        }
      }
    )
    return res.json({status:200,result:true,data:departmentAll})
} catch (error) {
    return res.json({status:404,result:false,Message:error})

}
}

export const departmentgetbyid=async(req,res)=>{
    try {
        let departmentbyid= await departmentModel.findByPk(req.params.id)
        return res.json({status:200,result:true,data:departmentbyid})
    } catch (error) {
        return res.json({status:404,result:false,Message:error})
    
    }
    }

    export const departmentdeleted = async (req, res) => {
        let id = req.params.id;
      
        try {
          let departmentDeleted = await departmentModel.destroy({
            where: {
              id: id,
            },
          });
      
          if (departmentDeleted > 0) {
            return res.json({
              status: 200,
              result: true,
              message: "The department was deleted successfully",
            });
          } else {
            return res.json({
              status: 404,
              result: false,
              message: "The department was not found",
            });
          }
        } catch (error) {
          console.error(error);
          return res.json({
            status: 500,
            result: false,
            message: "Internal server error",
          });
        }
      };
      export const departmentUpdated = async (req, res) => {
        let id = req.params.id;
      
        try {
          let departmentUpdated = await departmentModel.update(req.body,{
            where: {
              id: id,
            },
          });
      
          if (departmentUpdated[0] > 0) {
            return res.json({
              status: 200,
              result: true,
              message: "The department was Updated successfully",
            });
          } else {
            return res.json({
              status: 404,
              result: false,
              message: "The department was not found",
            });
          }
        } catch (error) {
          console.error(error);
          return res.json({
            status: 500,
            result: false,
            message: "Internal server error",
          });
        }
      };
      