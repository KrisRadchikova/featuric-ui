import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Answer} from '../model/answer';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {

  url = '/api/answer/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAnswerById(id: number): Observable<Answer> {
    return this.http.get<Answer>(this.url + id);
  }
}
