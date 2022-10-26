import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

/**
 * Error Interceptor
 * An Interceptor for handle general errors
 */
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event?.url?.includes('assets/i18n')) return;
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error?.url?.includes('assets/i18n')) return;

            if (error.status === 500)
              console.log('status code is', error.status);
            else if (error.status === 0)
              console.log('status code is', error.status);
            else if (error.status === 401) this.router.navigate(['/401']);
            else console.log('Something Went Wrong Please Try Again');
          }
        }
      )
    );
  }
}
