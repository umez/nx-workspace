/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { ContactPerson } from './contact-person';
import { IBusinessType } from './ibusiness-type';
export interface CaseOfDamageInsureeContactPerson {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  caseOfDamageId?: string;
  contactPerson?: ContactPerson;
  contactPersonId?: number;
  dependantObjects?: Array<IBusinessType>;
  email?: string;
  fax?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  mobile?: string;
  telephone?: string;
}
