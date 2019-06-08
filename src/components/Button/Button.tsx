import * as React from 'react';

import * as styles from './Button.module.css';
import { IProps } from './interfaces';

const Button = (props: IProps) => {
  const { children, className, onClick, text } = props;

  const classNames = className ? `${styles.button} ${className}` : styles.button;

  return (
    <button className={classNames} onClick={onClick} role={'button'}>
      {children || text}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  className: '',
  // tslint:disable-next-line: no-empty
  onClick: () => {},
  text: 'button',
};

export default Button;
