import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';
import Post from './post';
import Comment from './comment';

class Video extends Model {
    public id!: number;
    public videoMp!: string;
}

Video.init({
    videoMp: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Video',
    tableName: 'video',
    charset: 'utf8',
    collate: 'utf8_general_ci', 
});

export const associate = (db: dbType) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment); 
};

export default Video;