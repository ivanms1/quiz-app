import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  kind: 'primary' | 'error' | 'custom';
  onClick?: () => void;
  size?: 'big' | 'medium' | 'small';
  type?: 'button' | 'submit' | 'reset';
  link?: boolean;
  href?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

const Button = ({
  children,
  size = 'medium',
  link = false,
  href,
  kind,
  className,
  ...props
}: ButtonProps) => {
  if (link && href) {
    return (
      <Link href={href}>
        <div
          className={classNames(
            styles.Button,
            styles[size],
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
        styles[size],
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
