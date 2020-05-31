import React from 'react';

import { useQuizDispatch, useQuizState } from '../QuizContext';

import styles from './Question.module.css';
import Button from '../Button';

interface QuestionProps {
  question: { answers: string[]; question: string };
}

const Question = ({ question }: QuestionProps) => {
  const { totalQuestions, currentQuestionIndex } = useQuizState();
  const dispatch = useQuizDispatch();
  return (
    <div className={styles.ContainerQuestion}>
      <p className={styles.Question}>{question.question}</p>
      <div className={styles.Answers}>
        {question.answers.map((question) => (
          <Button
            onClick={() =>
              dispatch({ type: 'ANSWER_QUESTION', payload: question })
            }
            type='primary'
            key={question}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;
