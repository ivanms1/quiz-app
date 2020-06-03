import React from 'react';

import Layout from '../../components/Layout';

import styles from './about.module.css';

const About = () => {
  return (
    <Layout>
      <div className={styles.About}>
        Made with love by
        <a target='_blank' href='https://github.com/ivanms1'>
          Ivan
        </a>
      </div>
    </Layout>
  );
};

export default About;
