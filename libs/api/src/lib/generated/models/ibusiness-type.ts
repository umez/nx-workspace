/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
export interface IBusinessType {
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
}
