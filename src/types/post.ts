import { GenericItem } from './common.ts';

export interface IPost extends GenericItem {
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
