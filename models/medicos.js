const {Model,DataTypes} = require('sequelize');
const sequelize = require('../database/config');

class Medicos extends Model{}
Medicos.init({
  idMedico: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombres: DataTypes.STRING,
  apellidos: DataTypes.STRING,
  correo: DataTypes.STRING,
  password: DataTypes.STRING,
  sexo: DataTypes.CHAR,
  activo: DataTypes.BOOLEAN,
  cedula: DataTypes.STRING,
  especialidad: DataTypes.STRING,
  fechaAlta: DataTypes.DATE
}, {
  sequelize,
  timestamps: false,
  modelName: 'medicos',
});

module.exports = Medicos;