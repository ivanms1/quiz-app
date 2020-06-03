import React, { useState } from 'react';
import useSWR from 'swr';

import Question from '../Question';
import Button from '../Button';
import Spinner from '../Spinner';
import { useQuizState, useQuizDispatch } from '../QuizContext';

import styles from './Quiz.module.css';
import ProgressBar from '../ProgressBar';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface QuizProps {
  restartQuiz: () => void;
}

const Quiz = ({ restartQuiz }: QuizProps) => {
  const [notEnoughQuestions, setNotEnoughQuestions] = useState(false);
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
      onSuccess: (data) => {
        if (data.response_code === 0) {
          dispatch({ type: 'SET_QUESTIONS', payload: data.results });
        } else {
          setNotEnoughQuestions(true);
        }
      },
    }
  );

  if (error) {
    <p>ups an error happened please try again later</p>;
  }

  if (notEnoughQuestions) {
    return (
      <div>
        <p className={styles.NoQuestions}>
          We don't have enough questions for your query :(
        </p>
        <Button kind='primary' size='big' onClick={restartQuiz}>
          Back to settings
        </Button>
      </div>
    );
  }

  if (currentQuestionIndex === null) {
    return (
      <div className={styles.Loading}>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.Title}>{category.name}</h1>
      {isQuizFinished ? (
        <div>
          <p className={styles.FinalMessage}>
            You've finished the quiz!
            <br />
            Score: {score}/{questions.length}
          </p>
          <Button kind='primary' size='medium' link href='/'>
            Back to Home
          </Button>
        </div>
      ) : (
        <React.Fragment>
          <ProgressBar
            progress={currentQuestionIndex}
            total={questions.length}
          />
          <Question question={questions[currentQuestionIndex]} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Quiz;
