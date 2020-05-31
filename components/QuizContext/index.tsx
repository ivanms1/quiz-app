import React, { useReducer, createContext, useContext } from 'react';
import arrayShuffle from '../../helpers/arrayShuffler';

type Action =
  | { type: 'ANSWER_QUESTION'; payload: string }
  | { type: 'SET_QUESTIONS'; payload: Question[] };
type Dispatch = (action: Action) => void;

interface Question {
  question: string;
  answers: string[];
  correct_answer: string;
}
interface State {
  answers: string[];
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number | null;
  category: {
    value: number;
    name: string;
  };
  questions: Question[];
  isQuizFinished: boolean;
  url: string;
}
interface QuizProviderProps {
  children: React.ReactNode;
  category: {
    value: number;
    name: string;
  };
  url: string;
}

const QuizStateContext = createContext<State | undefined>(undefined);
const QuizDispatchContext = createContext<Dispatch | undefined>(undefined);

function quizReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload.map((question: any) => ({
          ...question,
          answers: arrayShuffle([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        })),
        currentQuestionIndex: 0,
        totalQuestions: action.payload.length,
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        score:
          state.questions[state.currentQuestionIndex!].correct_answer ===
          action.payload
            ? state.score + 1
            : state.score,
        currentQuestionIndex:
          state.totalQuestions > state.currentQuestionIndex! + 1
            ? state.currentQuestionIndex! + 1
            : state.currentQuestionIndex,
        isQuizFinished:
          state.totalQuestions === state.currentQuestionIndex! + 1,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuizProvider({ children, category, url }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, {
    answers: [],
    currentQuestionIndex: null,
    questions: [],
    category,
    totalQuestions: 0,
    score: 0,
    isQuizFinished: false,
    url,
  });

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  );
}

function useQuizState() {
  const context = useContext(QuizStateContext);
  if (context === undefined) {
    throw new Error('useQuizState must be used within a QuizProvider');
  }
  return context;
}

function useQuizDispatch() {
  const context = useContext(QuizDispatchContext);
  if (context === undefined) {
    throw new Error('useQuizDispatch must be used within a QuizProvider');
  }

  return context;
}

export { QuizProvider, useQuizState, useQuizDispatch };
