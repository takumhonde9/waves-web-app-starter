import { ButtonProps } from './types';
import { mergeStyles } from '../../utilities';
import { StylesButtonVariants, StylesButtonSizes } from './styles';

function Button({
  children,
  size = 'base',
  variant = 'solid',
  color = 'primary',
  classNames = '',
}: ButtonProps) {
  return (
    <button
      className={mergeStyles([
        'button',
        StylesButtonSizes[size],
        StylesButtonVariants[variant].Colors[color],
        classNames,
      ])}
    >
      {children}
    </button>
  );
}
Button.displayName = 'Button';

export default Button;
