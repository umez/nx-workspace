/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface CustomerArticle {
  activeFrom?: string;
  activeTo?: string;
  allProperties?: Array<string>;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  customerArticleId?: string;
  customerId?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
}
