import { sequelize } from './sequelize';
import { dbType } from './index';
import {
  Association,
  BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  Model,
} from 'sequelize';

class Lecture extends Model {
  public title!: string;
  public id!: number;
  public content!: string;
}

Lecture.init(
  {
    title: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(200),
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
