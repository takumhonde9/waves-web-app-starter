/**
 * Implement the post card props interface as you
 * see fit.
 *
 * Source: https://dummyjson.com/posts
 * */
import { IPost, IProfile } from '../../types';

export interface PostCardProps {
  /** Your code */
  data: IPost;
  owner: IProfile;
}
