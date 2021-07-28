const DataTypes = require('sequelize');
const { Model } = DataTypes;


module.exports = class Lecture extends Model {
  static init(sequelize) {
    return super.init({
        title: {
          type: DataTypes.STRING(70),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
    }, {
      modelName: 'Lecture', 
      tableName: 'lectures',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', 
      sequelize,
    });
  }
  static associate(db) {
    
  }
}


// src: {
//   type: DataTypes.STRING(200),
//   allowNull: false,
// },