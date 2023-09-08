import { GenericProps } from '../../types';

export interface GridProps extends GenericProps {
  /** The number of columns in the grid */
  cols?: 1 | 2 | 3;
  /** The gutter spacing between the columns */
  gap?: 1 | 2 | 3;
}
