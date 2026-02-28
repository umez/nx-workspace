/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { DunningPolicy } from './dunning-policy';
export interface DunningLevel {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  dueDays?: number;
  dunningLevelLevelAndTitel?: string;
  dunningPolicy?: DunningPolicy;
  dunningPolicyCode?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  level?: number;
  textAfter?: string;
  textBefore?: string;
  title?: string;
  toleranceDays?: number;
}
