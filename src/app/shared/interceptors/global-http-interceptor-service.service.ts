import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorServiceService implements HttpInterceptor {


  private onlineEvent: Observable<Event>;
  private offlineEvent: Observable<Event>;

  constructor() {

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.onlineEvent.subscribe(e => {
      console.log('Application is Online');
    });
    this.offlineEvent.subscribe(e => {
      console.log('Application is Offline');
    });
  }





  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request) {

      request = this.addHeaderProperties(request);

    }
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        console.log(error); // For testing purposes

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  }
 


  private addHeaderProperties(request: HttpRequest<any>) : HttpRequest<any>{
    try {
      return request.clone({
        setHeaders: {
          Application: "Quiz Engage",
          signature: `Quiz Engage`,
        }
      });
    } catch (e) { }

    return request;
  }




  private networkErrorScenario(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (error instanceof HttpErrorResponse) {
      const errorCode = (error as HttpErrorResponse).status;
      switch (true) {
        case (errorCode === 400):
          return throwError(error);

        case (errorCode === 401):
          return throwError(error);

        case (errorCode >= 500 && errorCode < 600):
          return throwError(error);

        case (errorCode === 0):
          return throwError(error);

        default:
          return throwError(error);
      }
    } else {
      return throwError(error);
    }
  }
}
