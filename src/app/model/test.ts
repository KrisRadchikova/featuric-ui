import {Question} from './question';
import {Category} from './category';

export interface Test{
  id: number;
  name: string;
  image: string;
  description: string;
  category: Category;
  questions: Question[];
}
