import { departmentModel } from "../../../DB/models/department.model.js"
import { employeeModel } from "../../../DB/models/employee.modle.js"


//postDate
export const employeepost=async(req,res,next)=>{
  return await employeeModel.create(req.body).then(()=>{
    res.json({status:200,result:true,Message:"Data Send Successfully"})
  }).catch((error)=>{
    res.json({status:404,result:false,Message:error})

  })
}

//GET All Data

export const employeeget=async(req,res)=>{
try {
    let employeeAll= await employeeModel.findAll(
      {
        include:{
          model:departmentModel
        }
      }
    )
    return res.json({status:200,result:true,data:employeeAll})
} catch (error) {
    return res.json({status:404,result:false,Message:error})

}
}

export const employeegetbyid=async(req,res)=>{
    try {
        let employeebyid= await employeeModel.findByPk(req.params.id)
        return res.json({status:200,result:true,data:employeebyid})
    } catch (error) {
        return res.json({status:404,result:false,Message:error})
    
    }
    }

    export const employeedeleted = async (req, res) => {
        let id = req.params.id;
      
        try {
          let employeeDeleted = await employeeModel.destroy({
            where: {
              id: id,
            },
          });
      
          if (employeeDeleted > 0) {
            return res.json({
              status: 200,
              result: true,
              message: "The employee was deleted successfully",
            });
          } else {
            return res.json({
              status: 404,
              result: false,
              message: "The employee was not found",
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
      export const employeeUpdated = async (req, res) => {
        let id = req.params.id;
      
        try {
          let employeeUpdated = await employeeModel.update(req.body,{
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
      