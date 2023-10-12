const {  DataTypes } = require('sequelize');
let sequelize = require('../../../common/dbconnection');

const student = sequelize.define('student',{
    id:{
        primaryKey : true,
        autoIncrement :true,
        type :DataTypes.INTEGER
    },
    rollNo:{
        unique:true,
        allowNull:false,
        type : DataTypes.STRING
    },
    lastName:{
        unique :true,
        allowNull:true,
        type:DataTypes.STRING

    },department:{
        unique :true,
        allowNull:false,
        type:DataTypes.STRING,

    },semester:{
        allowNull:false,
        type:DataTypes.INTEGER,
    },

},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName:"student",
})
module.exports= student