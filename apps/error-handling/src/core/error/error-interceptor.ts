import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorLoggerService } from './error-logger.service';
import { catchError, throwError } from 'rxjs';
import { ErrorLevel } from './error-level.enum';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const logger = inject(ErrorLoggerService);

  return next(req).pipe(
    catchError(err => {
      const appError = {
        message: err.message,
          level: ErrorLevel.Error,
          timestamp: new Date().toISOString(),
          statusCode: err.status,
          url: req.url
      }
      // logger.log(appError)
      return throwError(() => err);
    })
  )
};
