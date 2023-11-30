import { sequelize } from "./connection.js";
import { DataTypes } from 'sequelize';

export const departmentModel=sequelize.define("Department",{
    id:{
        type:DataTypes.INTEGER(100),
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    }
    ,
    departmentName:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    numberOfRoof:{
        type:DataTypes.INTEGER(100),
        allowNull:false
    },createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
},{
    timestamps:true
})