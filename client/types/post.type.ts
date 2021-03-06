import User from './user.type';
import Comment from './comment.type';

export default interface Post {
  _id?: any | null;
  body: string;
  user?: User['_id'];
  comments?: Array<Comment['_id']>;
}