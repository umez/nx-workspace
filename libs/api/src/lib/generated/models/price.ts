/* tslint:disable */
import { Article } from './article';
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { PriceListItemGroup } from './price-list-item-group';
export interface Price {
  allProperties?: Array<string>;
  article?: Article;
  articleDescription?: string;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  customerArticleId?: string;
  customerDescription?: string;
  customerId?: string;
  dependantObjects?: Array<IBusinessType>;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  position?: number;
  priceIdScaleBasePrice?: number;
  priceListId?: number;
  priceListItemGroup?: PriceListItemGroup;
  priceListItemGroupId?: number;
  priceTypeCode?: string;
  priceTypeDescription?: string;
  priceValue?: number;
  rebateRate?: number;
  scalePriceAmount?: number;
  scalePriceChildren?: Array<Price>;
  unitCode?: string;
  unitDescription?: string;
  validFrom?: string;
  validTo?: string;
}
