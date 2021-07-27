import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class Video extends Model {
  public id!: number;

  public videoMp!: string;
}

Video.init(
  {
    videoMp: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Video',
    tableName: 'video',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Lecture);
  db.User.hasMany(db.Review);
};

export default Video;
