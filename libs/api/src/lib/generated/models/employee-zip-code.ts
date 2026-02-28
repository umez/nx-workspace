/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface EmployeeZipCode {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  employeeId?: string;
  germanZipCode?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
}
