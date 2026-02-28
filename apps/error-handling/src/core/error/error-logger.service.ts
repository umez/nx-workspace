import * as Sentry from '@sentry/browser';
import { AppError } from './error.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorLoggerService {

  log(error: AppError): void {
    console.warn(error);
    Sentry.captureException(error);
  }
}
