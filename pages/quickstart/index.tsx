import React, { useState } from 'react';
import Select from 'react-select';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Quiz from '../../components/Quiz';
import { QuizProvider } from '../../components/QuizContext';

import categories from '../constants/categories';

import styles from './quickstart.module.css';

const QuickStart = () => {
  const [category, setCategory] = useState<{
    value: number;
    label: string;
  } | null>(null);
  const [didGameStart, setDidGameStart] = useState(false);

  return (
    <Layout>
      <div className={styles.QuickStart}>
        {category && didGameStart ? (
          <QuizProvider
            category={{
              value: category.value,
              name: category.label,
            }}
            url={`?amount=10&category=${category.value}`}
          >
            <Quiz />
          </QuizProvider>
        ) : (
          <React.Fragment>
            <h1 className={styles.Title}>Choose a category</h1>
            <div className={styles.ActionBox}>
              <Select
                value={category}
                className={styles.Select}
                onChange={(val) => setCategory(val)}
                options={categories}
              />
              <Button onClick={() => setDidGameStart(true)} type='primary'>
                Start
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </Layout>
  );
};

export default QuickStart;
