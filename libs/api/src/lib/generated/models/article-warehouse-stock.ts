/* tslint:disable */
import { Article } from './article';
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { Warehouse } from './warehouse';
export interface ArticleWarehouseStock {
  allProperties?: Array<string>;
  article?: Article;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  stock?: number;
  warehouse?: Warehouse;
  warehouseCode?: string;
}
