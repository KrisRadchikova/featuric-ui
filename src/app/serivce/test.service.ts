import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Test} from '../model/test';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  url = '/api/test/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(this.url + 'getAll');
  }
}
