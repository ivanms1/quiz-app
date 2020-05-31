import Head from 'next/head';

import styles from './index.module.css';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Quiz App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.HomePage}>
        <h1 className={styles.Title}>Welcome to the Quiz App</h1>
        <div className={styles.ActionButtons}>
          <Button type='primary' link href='/quickstart'>
            Quick Start
          </Button>
          <Button type='primary' link href='/custom'>
            Custom Quiz
          </Button>
        </div>
      </div>
    </Layout>
  );
}