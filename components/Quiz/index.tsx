import React from 'react';
import useSWR from 'swr';

import Question from '../Question';
import { useQuizState, useQuizDispatch } from '../QuizContext';

import styles from './Quiz.module.css';
import Button from '../Button';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Quiz = () => {
  const {
    category,
    questions,
    currentQuestionIndex,
    url,
    isQuizFinished,
    score,
  } = useQuizState();

  const dispatch = useQuizDispatch();
  const { error } = useSWR(
    currentQuestionIndex === null ? `/api/questions${url}` : null,
    fetcher,
    {
      onSuccess: (data) =>
        dispatch({ type: 'SET_QUESTIONS', payload: data.results }),
    }
  );

  if (error) {
    <p>ups an error happened please try again later</p>;
  }

  if (currentQuestionIndex === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className={styles.Title}>{category.name}</h1>
      {isQuizFinished ? (
        <div>
          <h4>You've finished the quiz, this is your final score: {score}</h4>
          <Button type='primary' link href='/'>
            Back to Home
          </Button>
        </div>
      ) : (
        <Question question={questions[currentQuestionIndex]} />
      )}
    </div>
  );
};

export default Quiz;
