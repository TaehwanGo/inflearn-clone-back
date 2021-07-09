import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class Lecture extends Model {
  public id!: number;

  public content!: string;
}

Lecture.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Lecture',
    tableName: 'lecture',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.Lecture.belongsTo(db.User);
  db.Lecture.hasMany(db.Review);
  db.Lecture.hasMany(db.Image);
  db.Lecture.hasMany(db.Video);
};

export default Lecture;
