const DataTypes = require('sequelize');
const { Model } = DataTypes; 


module.exports = class Video extends Model {
  static init(sequelize) {
    return super.init({    
        videoMp: {
          type: DataTypes.STRING(50),
          allowNull: false,
        }
    }, {
      modelName: 'Video',
      tableName: 'videos',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    });
  }
  static associate(db) {
    
  }
}
  

