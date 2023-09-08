import { GenericProps } from '../../types';

// [Optional] Add type extensions in this file

export interface IAppContext {
  authorName: string;
}

export interface AppProviderProps extends GenericProps {
  authorName: string;
}
