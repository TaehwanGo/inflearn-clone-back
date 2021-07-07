import { sequelize } from './sequelize';
import Comment  from './comment';
import Image from './image';
import User from './user';
import Video from './video';
import { dbType } from './index';

import {
    Association,
    BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin,
    DataTypes,
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    Model,
  } from 'sequelize';


class Post extends Model {
    public id!: number;
    public content!: string;
    public UserId!: number;
}

Post.init({
    content: {
        type: DataTypes.TEXT, 
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'post',
    charset: 'utf8mb4', 
    collate: 'utf8mb4_general_ci',
});

export const associate = (db: dbType) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.hasMany(db.Video);
}

export default Post;