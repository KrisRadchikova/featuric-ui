import {Answer} from './answer';

export interface Question{
  id: number;
  name: string;
  image: string;
  description: string;
  answers: Answer[];
}
