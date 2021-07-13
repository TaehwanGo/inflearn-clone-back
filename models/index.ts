import Image, { associate as associateImage } from './image';
import User, { associate as associateUser } from './user';
import Video, { associate as associateVideo } from './video';
import Comment, { associate as associateComment } from './comment';
import Post, { associate as associatePost } from './post';

export * from './sequelize';
const db = {
    Comment,
    Video, 
    User,
    Image,
    Post,
};

export type dbType = typeof db;

associateComment(db);
associateVideo(db);
associateUser(db);
associateImage(db);
associatePost(db);

