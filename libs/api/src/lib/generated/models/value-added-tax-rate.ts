/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface ValueAddedTaxRate {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  codeRcMinimumThresholdSubstitute?: string;
  dependantObjects?: Array<IBusinessType>;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDefault?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isReverseCharge?: boolean;
  isTrackable?: boolean;
  name?: string;
  rcMinimumThreshold?: number;
}
