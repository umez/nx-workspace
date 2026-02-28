import { ErrorHandler, inject, Injectable } from "@angular/core";
import { ErrorLoggerService } from "./error-logger.service";
import { ErrorStore } from "./error.store";
import { ErrorLevel } from "./error-level.enum";
import { ToastService } from "../ui-component-services/toast/toast.service";

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {

  #logger = inject(ErrorLoggerService);
  #store = inject(ErrorStore);

  #toast = inject(ToastService);

  handleError(error: any): void {
    const appError = {
      message: error instanceof Error ? error.message : 'Unknown error',
      level: ErrorLevel.Error,
      timestamp: new Date().toISOString(),
      stack: error instanceof Error ? error.stack : undefined
    };

    this.#toast.error('Something went wrong!');

    this.#store.add(appError);
    this.#logger.log(appError);
  }
}
