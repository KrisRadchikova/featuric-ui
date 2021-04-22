import {Question} from './question';

export interface Answer{
  id: number;
  description: string;
  rightAnswer: boolean;
  question: Question;
}
