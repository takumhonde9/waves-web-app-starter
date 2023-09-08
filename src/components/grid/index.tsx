import { GridProps } from './types';
import { mergeStyles } from '../../utilities';
import { GridColumns, GridGap } from './styles';

import styles from './styles.module.css';

/**
 * Simple Grid component. Renders a grid with specified
 * number of columns and specified spacing between them.
 */
function Grid({ children, cols = 1, gap = 2 }: GridProps) {
  const columnsClassName = GridColumns[cols];

  return (
    <div
      role='grid'
      className={mergeStyles([
        GridGap[gap],
        styles.grid,
        styles[columnsClassName],
      ])}
    >
      {children}
    </div>
  );
}
Grid.displayName = 'Grid';

export default Grid;
