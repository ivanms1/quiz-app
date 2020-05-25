import React from 'react';

import styles from './Layout.module.css';
import Sidebar from '../SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
