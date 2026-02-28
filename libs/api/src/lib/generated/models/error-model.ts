/* tslint:disable */
export interface ErrorModel {
  message?: string;
  messageArguments?: {[key: string]: any};
  messageLanguageKey?: string;
  origin?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  propertyName?: string;
}
