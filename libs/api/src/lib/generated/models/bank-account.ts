/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { BusinessPartner } from './business-partner';
import { IBusinessType } from './ibusiness-type';
export interface BankAccount {
  accountNumber?: string;
  allProperties?: Array<string>;
  bankCode?: string;
  bankName?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  businessPartner?: BusinessPartner;
  businessPartnerId?: string;
  dependantObjects?: Array<IBusinessType>;
  iban?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isSepaAccount?: boolean;
  isTrackable?: boolean;
  swift?: string;
}
