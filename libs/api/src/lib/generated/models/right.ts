/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { RightCategory } from './right-category';
export interface Right {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  categoryName?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  name?: string;
  rightCategory?: RightCategory;
  rightCategoryId?: number;
}
