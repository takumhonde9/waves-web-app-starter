import { GenericProps } from '../../types';

export interface ButtonProps extends GenericProps {
  variant?: 'solid';
  color?: 'primary';
  size?: 'sm' | 'base' | 'lg';
  classNames?: '';
}
