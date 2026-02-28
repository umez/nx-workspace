/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface ProductBookingGroup {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  codeRcMinimumThresholdSubstitute?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDefault?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isReverseCharge?: boolean;
  isTrackable?: boolean;
  rcMinimumThreshold?: number;
  vatCode?: string;
}
