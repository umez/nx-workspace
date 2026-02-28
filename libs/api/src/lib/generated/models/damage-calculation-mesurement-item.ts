/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface DamageCalculationMesurementItem {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  customCustomerArticleNumber?: string;
  damageCalculationItemDescription?: string;
  damageCalculationItemId?: number;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  factor?: number;
  height?: number;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  length?: number;
  total?: number;
  unitCode?: string;
  width?: number;
}
