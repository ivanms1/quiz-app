import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

import HomeIcon from '../../assets/svg/home.svg';
import QuickIcon from '../../assets/svg/quick.svg';
import CustomIcon from '../../assets/svg/custom.svg';
import AboutIcon from '../../assets/svg/about.svg';

import styles from './SideBar.module.css';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.SideBar}>
      <Link href='/'>
        <div
          className={classNames(styles.SideBarItem, {
            [styles.active]: router.pathname === '/',
          })}
        >
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link href='/quickstart'>
        <div
          className={classNames(styles.SideBarItem, {
            [styles.active]: router.pathname === '/quickstart',
          })}
        >
          <QuickIcon />
          <p>Quick</p>
        </div>
      </Link>
      <Link href='/custom'>
        <div
          className={classNames(styles.SideBarItem, {
            [styles.active]: router.pathname === '/custom',
          })}
        >
          <CustomIcon />
          <p>Custom</p>
        </div>
      </Link>
      <Link href='/about'>
        <div
          className={classNames(styles.SideBarItem, {
            [styles.active]: router.pathname === '/about',
          })}
        >
          <AboutIcon />
          <p>About</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
