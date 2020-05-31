import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  type: 'primary' | 'error' | 'custom';
  kind?: 'big' | 'medium' | 'small';
  link?: boolean;
  href?: string;
}

const Button = ({
  children,
  type,
  link = false,
  href,
  kind = 'medium',
  className,
  ...props
}: ButtonProps) => {
  if (link && href) {
    return (
      <Link href={href}>
        <div
          className={classNames(
            styles.Button,
            styles[type],
            styles[kind],
            className
          )}
        >
          {children}
        </div>
      </Link>
    );
  }
  return (
    <button
      className={classNames(
        styles.Button,
        styles[type],
        styles[kind],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
