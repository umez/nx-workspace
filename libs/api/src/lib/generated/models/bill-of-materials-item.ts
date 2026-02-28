/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { Article } from './article';
import { IBusinessType } from './ibusiness-type';
export interface BillOfMaterialsItem {
  allProperties?: Array<string>;
  amount?: number;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  childArticle?: Article;
  childArticleId?: string;
  dependantObjects?: Array<IBusinessType>;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  parentArticle?: Article;
  parentArticleId?: string;
  unitCode?: string;
}
