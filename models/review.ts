import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
import User from './user';

class Review extends Model {
  public id!: number;

  public content!: string;

  public readonly User?: User;
}

Review.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'review',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);

export const associate = (db: dbType) => {
  db.Review.belongsTo(db.User);
  db.Review.belongsTo(db.Lecture);
};

export default Review;
