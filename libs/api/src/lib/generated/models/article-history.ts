/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface ArticleHistory {
  allProperties?: Array<string>;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  changedBy?: string;
  changedTimestamp?: string;
  dependantObjects?: Array<IBusinessType>;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  text?: string;
}
