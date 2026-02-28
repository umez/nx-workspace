/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface BusinessBookingGroup {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  disallowReverseCharge?: boolean;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDefault?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  vatBookingGroupCode?: string;
}
