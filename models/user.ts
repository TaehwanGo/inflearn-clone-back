import { dbType } from './index';
import Post from './post';
import Comment from './comment';
import { sequelize } from './sequelize';
import { 
    BelongsToManyAddAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    DataTypes,
    Model,
} from 'sequelize';


class User extends Model {
    public id!: number; 
    public userId!: string;
    public nickName!: string;
    public passWord!: string; 
    public email!: string;
}

User.init({
    userId: {
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
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
})


export const associate = (db: dbType) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
}

export default User;