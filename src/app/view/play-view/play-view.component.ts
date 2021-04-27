import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../model/test';
import {Answer} from '../../model/answer';
import {Question} from '../../model/question';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TestService} from '../../serivce/test.service';
import {AnswerService} from '../../serivce/answer.service';
import {QuestionService} from '../../serivce/question.service';
import {CountdownEvent} from 'ngx-countdown';

// TODO change names

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.scss']
})
export class PlayViewComponent implements OnInit {

  @Input()
  test: Test; // тест

  private questions: Question[] = []; // вопросы данной игры
  question: Question; // текущий вопрос
  quantityQuestion: number; // количество вопросов
  questionNumber = 0; // номер данного вопроса
  index: number[] = []; // для нумерации вопросов

  answer: Answer = null; // ответ который дал игрок
  answeredQuestion = 0; // сколько вопросов ответил игрок
  isBlockAnswers: boolean; // для блокирования ответов

  timeIsOver = false; // конец таймера(при true таймер 0)
  private answerButtonNotPressed = true; // когда кнопка "ответить" не была нажата

  constructor(private questionService: QuestionService,
              private answerService: AnswerService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router,
              private testService: TestService) {
  }

  ngOnInit(): void {
    this.isBlockAnswers = false;
    this.timeIsOver = false;
    // this.questionService.getQuestionsByTestId(this.test.id).subscribe(questions => {
    this.questions = this.test.questions;
    this.question = this.questions[this.questionNumber];
    this.quantityQuestion = this.questions.length;
    for (let i = 0; i < this.quantityQuestion; i++) {
      this.index.push(i);
    }
    // });
  }

  getAnswerById(): Observable<Answer> {
    return this.answerService.getAnswerById(this.answer.id);
  }

  setNextQuestion(): void {
    this.isBlockAnswers = false;
    this.timeIsOver = false;
    this.answerButtonNotPressed = true;
    this.questionNumber++;
    this.question = this.questions[this.questionNumber];
    this.answer = null;
  }

  private setColor(): string[] {
    let color: string[] = [];
    for (let i = 0; i < this.quantityQuestion; i++) {
      color.push('gray');
    }
    return color;
  }

  addAnswer(): void {
    this.isBlockAnswers = true;
    this.answerButtonNotPressed = false;
  }

  openSnackBar(message, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  isDisabled(): boolean {
    return this.timeIsOver || this.isBlockAnswers;
  }

  // TODO показать как ответил пользователь
  timerEvent($event: CountdownEvent): void {
    if ($event.left === 0) {
      this.timeIsOver = true;
      this.answeredQuestion++;
      // this.getAnswerById().subscribe(answer => {
      //   this.answer = answer;
      //   if (answer == null || this.answerButtonNotPressed) {
      //     return;
      //   }
      //   const idx = this.players.findIndex(p => p.player.id === this.player.id);
      //   if (answer.rightAnswer) {
      //     this.players[idx].answerColor[this.questionNumber] = 'green';
      //   } else {
      //     this.players[idx].answerColor[this.questionNumber] = 'red';
      //   }
      // });
    }
  }

  redirect(url: string): void {
    this.router.navigate([url]);
  }
}
