const DataTypes = require('sequelize');
const { Model } = DataTypes; 


module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({    
        email: {
          type: DataTypes.STRING(25),
          allowNull: false,
          unique: true,
        },
        nickName: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        passWord: {
          type: DataTypes.STRING(90),
          allowNull: false,
        },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    });
  }
  static associate(db) {
  
  }
}
  

