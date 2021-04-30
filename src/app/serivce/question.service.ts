import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../model/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  url = '/api/question/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getQuestionsByTestId(testId: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + testId);
  }
}
