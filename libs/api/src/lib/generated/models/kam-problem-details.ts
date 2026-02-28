/* tslint:disable */
import { ErrorModel } from './error-model';
export interface KamProblemDetails {
  businessLogicType?: string;
  detail?: string;
  errors?: Array<ErrorModel>;
  instance?: string;
  status?: number;
  title?: string;
}
