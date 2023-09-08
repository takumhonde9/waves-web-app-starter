import { mergeStyles } from '../../utilities';
import { AvatarProps } from './types';
import styles from './styles.module.css';

function Avatar({ size = 'base', src, name }: AvatarProps) {
  return (
    <img
      className={mergeStyles([styles.avatar, styles[size], 'font-size-1'])}
      src={src}
      alt={name}
    />
  );
}
Avatar.displayName = 'Avatar';

export default Avatar;
