import { Injectable, signal } from "@angular/core";
import { AppError } from "./error.model";

@Injectable({providedIn: 'root'})
export class ErrorStore{

  readonly _errors = signal<AppError[]>([]);

  add(error: AppError) {
    this._errors.update(prev => [...prev, error]);
  }

  clear() {
    this._errors.set([]);
  }
}
