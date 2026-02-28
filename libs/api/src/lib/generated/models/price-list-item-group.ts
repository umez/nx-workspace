/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { Price } from './price';
export interface PriceListItemGroup {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  categoryName?: string;
  children?: Array<PriceListItemGroup>;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  name?: string;
  parent?: PriceListItemGroup;
  parentId?: number;
  position?: number;
  priceListId?: number;
  prices?: Array<Price>;
}
