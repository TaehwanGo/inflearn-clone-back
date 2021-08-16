import { DataTypes, Model, Optional } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

interface UserAttributes {
  id: number;
  email: string;
  nickName: string | null;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public nickName!: string | null;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    nickName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
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
