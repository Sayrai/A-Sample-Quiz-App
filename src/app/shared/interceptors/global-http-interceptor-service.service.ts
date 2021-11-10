import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorServiceService implements HttpInterceptor {


  constructor() {  }





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



}
