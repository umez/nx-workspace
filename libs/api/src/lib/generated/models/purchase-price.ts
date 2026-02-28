/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface PurchasePrice {
  allProperties?: Array<string>;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  priceIdScaleBasePrice?: number;
  priceTypeCode?: string;
  priceValue?: number;
  scalePriceAmount?: number;
  scalePriceChildren?: Array<PurchasePrice>;
  unitCode?: string;
  validFrom?: string;
  validTo?: string;
  vendorId?: string;
}
