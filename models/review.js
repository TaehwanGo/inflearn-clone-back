const DataTypes = require('sequelize');
const { Model } = DataTypes;


module.exports = class Review extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      modelName: 'Review', 
      tableName: 'reviews',
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