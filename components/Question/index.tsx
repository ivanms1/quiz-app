import React from 'react';

import { useQuizDispatch, useQuizState } from '../QuizContext';

import styles from './Question.module.css';
import Button from '../Button';

interface QuestionProps {
  question: { answers: string[]; question: string };
}

const Question = ({ question }: QuestionProps) => {
  const dispatch = useQuizDispatch();

  if (!question) {
    return null;
  }

  return (
    <div className={styles.ContainerQuestion}>
      <p
        className={styles.Question}
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <div className={styles.Answers}>
        {question.answers.map((answer) => (
          <Button
            size='big'
            className={styles.Answer}
            onClick={() =>
              dispatch({ type: 'ANSWER_QUESTION', payload: answer })
            }
            kind='custom'
            key={answer}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
