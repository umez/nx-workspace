import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { GlobalErrorHandlerService } from '../core/error/global-error-handler.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../core/error/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    provideHttpClient(
      withInterceptors([errorInterceptor])
    )
  ],
};
