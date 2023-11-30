import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";
import { departmentModel } from "./department.model.js";


export const employeeModel=sequelize.define("employee",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
        
        
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false,
       
        unique: true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique: true
    },
    DateOfBirth:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

employeeModel.hasMany(departmentModel,{
    onDelete:"cascade",
    onUpdate:"cascade"
})
departmentModel.belongsTo(employeeModel);