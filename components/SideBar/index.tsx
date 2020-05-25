import React from 'react';

import HomeIcon from '../../assets/svg/home.svg';
import QuickIcon from '../../assets/svg/quick.svg';
import CustomIcon from '../../assets/svg/custom.svg';
import AboutIcon from '../../assets/svg/about.svg';

import styles from './SideBar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.SideBar}>
      <Link href='/'>
        <div className={styles.SideBarItem}>
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link href='/quickstart'>
        <div className={styles.SideBarItem}>
          <QuickIcon />
          <p>Quick</p>
        </div>
      </Link>
      <Link href='/custom'>
        <div className={styles.SideBarItem}>
          <CustomIcon />
          <p>Custom</p>
        </div>
      </Link>
      <Link href='/about'>
        <div className={styles.SideBarItem}>
          <AboutIcon />
          <p>About</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
