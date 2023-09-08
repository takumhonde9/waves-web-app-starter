import { GenericItem } from './common.ts';

export interface IProfile extends GenericItem {
  firstName: string;
  username: string;
  lastName: string;
  image: string;
}
