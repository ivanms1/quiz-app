import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.css';
import Layout from '../components/Layout';
import Button from '../components/Button';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  // const { data } = useSWR(
  //   '/api/questions?amount=10&category=20&difficulty=medium&type=multiple',
  //   fetcher
  // );

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
