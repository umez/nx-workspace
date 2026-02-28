/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { IConvertible } from './iconvertible';
export interface ArticleType {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  canBeSelected?: boolean;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  exportableColumnValues?: Array<IConvertible>;
  htmlInfo?: string;
  identifier?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  importAction?: 0 | 1 | 2 | 3;
  importChangedPropertiesNames?: Array<string>;
  index?: number;
  isDeletable?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isSelected?: boolean;
  isTrackable?: boolean;
  saveStatus?: 0 | 1 | 2 | 3;
  validationBrokenRules?: Array<BrokenBusinessRule>;
}
