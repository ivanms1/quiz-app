import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';
import Link from 'next/link';

const buttonTypes = {
  primary: 'primary',
  error: 'error',
};

interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'error';
  link?: boolean;
  href?: string;
}

const Button = ({
  children,
  type,
  link = false,
  href,
  ...props
}: ButtonProps) => {
  if (link && href) {
    return (
      <Link href={href}>
        <div className={classNames(styles.Button, styles[buttonTypes[type]])}>
          {children}
        </div>
      </Link>
    );
  }
  return (
    <div
      className={classNames(styles.Button, styles[buttonTypes[type]])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
