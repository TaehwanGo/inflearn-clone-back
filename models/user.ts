import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class User extends Model {

    public id!: number; 
    public userId!: string;
    public nickName!: string;
    public passWord!: string; 
    public email!: string;

  public id!: number;

  public email!: string;

  public nickName!: string;

  public passWord!: string;

}

User.init(
  {
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
    email: {
        type: DataTypes.STRING(40), 
        allowNull: false,
    },
}, {

      type: DataTypes.STRING(90),
      allowNull: false,
    },
  },
  {

    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Lecture);
  db.User.hasMany(db.Review);
};

export default User;
