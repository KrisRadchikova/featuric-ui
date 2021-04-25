import {Category} from './model/category';
import {Test} from './model/test';
import {Question} from './model/question';
import {Answer} from './model/answer';

// TODO delete this class when services will be implement
export class Globals {
  static categories: Category[] = [
    {
      id: 1,
      name: 'Спорт',
      description: 'Категория про спорт'
    },
    {
      id: 2,
      name: 'Искусство',
      description: 'Категория про искусство'
    },
    {
      id: 3,
      name: 'Литература',
      description: 'Категория про литературу'
    },
    {
      id: 4,
      name: 'Математика',
      description: 'Категория про математику'
    }
  ];

  static tests: Test[] = [
    {
      id: 1,
      name: 'Test#1',
      description: 'Super mega test',
      image: 'beauty',
      category: Globals.categories[0],
      questions: [
        {
          id: 1,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 1,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 2,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        },
        {
          id: 2,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 3,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 4,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Test#2',
      description: 'Super mega test#2',
      image: 'beauty',
      category: Globals.categories[0],
      questions: [
        {
          id: 3,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 5,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 6,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        },
        {
          id: 4,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 7,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 8,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Test#3',
      description: 'Super mega test#3',
      image: 'beauty',
      category: Globals.categories[0],
      questions: [
        {
          id: 5,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 9,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 10,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        },
        {
          id: 6,
          name: 'super mega question',
          description: 'WTF???',
          image: 'beauty',
          answers: [
            {
              id: 11,
              name: 'WTF?',
              description: 'super mega answer',
              rightAnswer: true
            },
            {
              id: 12,
              name: 'WTF#2?',
              description: 'super mega answer#2',
              rightAnswer: false
            }
          ]
        }
      ]
    }
  ];

  static questions: Question[] = [
    {
      id: 1,
      name: 'super mega question',
      description: 'WTF???',
      image: 'beauty',
      answers: [
        {
          id: 1,
          name: 'WTF?',
          description: 'super mega answer',
          rightAnswer: true
        }
      ]
    }
  ];

  static answers: Answer[] = [
    {
      id: 1,
      name: 'WTF?',
      description: 'super mega answer',
      rightAnswer: true
    }
  ];
}
