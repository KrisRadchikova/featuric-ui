import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  requests: HttpRequest<any>[] = [];

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.requests.splice(this.requests.indexOf(req), 1);
        if (this.requests.length === 0) {
          this.loaderService.hide();
        }
      })
    );
  }
}
