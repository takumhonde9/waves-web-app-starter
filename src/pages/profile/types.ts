import { IPost, PaginationParams } from '../../types';

export interface GetPostsQueryModel {
  total: number;
  limit: number;
  skip: number;
  items: IPost[];
}

export interface UserPostsVariables extends PaginationParams {
  id: number;
}
