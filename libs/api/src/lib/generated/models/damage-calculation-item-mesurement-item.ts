/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { CaseOfDamageMeasureItem } from './case-of-damage-measure-item';
export interface DamageCalculationItemMesurementItem {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  codmI_Id?: number;
  damageCalculationItemId?: number;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  measureItem?: CaseOfDamageMeasureItem;
  position?: number;
}
