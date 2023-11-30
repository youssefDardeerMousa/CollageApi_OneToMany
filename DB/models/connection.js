import Sequelize from 'sequelize'

export const sequelize=new Sequelize('collage','root','root',{
    host: 'localhost',
  dialect:'mysql'
})

export const connectDB=async()=>{
    return await sequelize.sync({alter:true,force:false}).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
}