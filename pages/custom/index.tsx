import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import Select from 'react-select';

import Layout from '../../components/Layout';

import styles from './Custom.module.css';
import { QuizProvider } from '../../components/QuizContext';
import Quiz from '../../components/Quiz';
import Button from '../../components/Button';
import categories from '../../constants/categories';
import numberOfQuestions from '../../constants/numberOfQuestions';

type Category = { value: number; label: string } | null;

const difficulties = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

const Custom = () => {
  const [categoryToStart, setCategoryToStart] = useState<Category | null>(null);
  const [url, setUrl] = useState('');
  return (
    <Layout>
      <div className={styles.Custom}>
        <h1 className={styles.Title}>Create your custom quiz</h1>
        {categoryToStart ? (
          <QuizProvider
            category={{
              value: categoryToStart.value,
              name: categoryToStart.label,
            }}
            url={url}
          >
            <Quiz resStartQuiz={() => setCategoryToStart(null)} />
          </QuizProvider>
        ) : (
          <Formik
            initialValues={{
              category: {
                value: 9,
                label: 'General Knowledge',
              },
              numberOfQuestions: { value: 10, label: 10 },
              difficulty: { value: 'medium', label: 'Medium' },
            }}
            onSubmit={({ numberOfQuestions, category, difficulty }) => {
              setUrl(
                `?amount=${numberOfQuestions.value}&category=${category.value}&difficulty=${difficulty.value}`
              );

              setCategoryToStart(category);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className={styles.FormContainer}>
                <div className={styles.FieldContainer}>
                  <label htmlFor='category' className={styles.FieldLabel}>
                    Choose a category
                  </label>
                  <Field
                    id='category'
                    name='category'
                    value={values.category}
                    placeholder='All'
                    component={Select}
                    className={styles.Select}
                    onChange={(val) => setFieldValue('category', val)}
                    options={categories}
                  />
                </div>
                <div className={styles.FieldContainer}>
                  <label
                    htmlFor='numberOfQuestions'
                    className={styles.FieldLabel}
                  >
                    Number of Questions
                  </label>
                  <Field
                    id='numberOfQuestions'
                    name='numberOfQuestions'
                    value={values.numberOfQuestions}
                    component={Select}
                    className={styles.Select}
                    onChange={(val) => setFieldValue('numberOfQuestions', val)}
                    options={numberOfQuestions}
                  />
                </div>
                <div className={styles.FieldContainer}>
                  <label htmlFor='difficulty' className={styles.FieldLabel}>
                    Choose difficulty
                  </label>
                  <Field
                    id='difficulty'
                    name='difficulty'
                    value={values.difficulty}
                    component={Select}
                    className={styles.Select}
                    onChange={(val) => setFieldValue('difficulty', val)}
                    options={difficulties}
                  />
                </div>
                <Button
                  type='submit'
                  className={styles.StartButton}
                  kind='primary'
                  size='big'
                >
                  Start
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </Layout>
  );
};

export default Custom;
