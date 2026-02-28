/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface TermOfPayment {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  discountDays?: number;
  discountPercent?: number;
  dueDays?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  invoiceText?: string;
  isDefault?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isPurchasingTerm?: boolean;
  isSalesTerm?: boolean;
  isSepaDebit?: boolean;
  isTrackable?: boolean;
  toP_datev_code?: number;
}
