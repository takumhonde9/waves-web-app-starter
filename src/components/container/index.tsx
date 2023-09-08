import { GenericProps } from '../../types';
import { mergeStyles } from '../../utilities';
import styles from './styles.module.css';

/**
 *
 * Note: Useful for containing component to a specific max width.
 * You can alter the max width as you see fit.
 *
 * - See `styles.module.css`
 *
 */

function Container({ children, className = '' }: GenericProps) {
  return (
    <div className={mergeStyles([styles.container, className])}>
      {children}
    </div>
  );
}
Container.displayName = 'Container';

export default Container;
