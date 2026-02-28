/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface AddressType {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isBusinessPartnerType?: boolean;
  isContactPersonType?: boolean;
  isCustomerType?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isEmployeeType?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  isVendorType?: boolean;
  sort?: number;
  text?: string;
}
