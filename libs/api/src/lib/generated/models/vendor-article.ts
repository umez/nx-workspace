/* tslint:disable */
import { Article } from './article';
import { BrokenBusinessRule } from './broken-business-rule';
import { PurchasePrice } from './purchase-price';
import { IBusinessType } from './ibusiness-type';
import { Vendor } from './vendor';
export interface VendorArticle {
  allProperties?: Array<string>;
  article?: Article;
  articleId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  currentPurchasePrices?: Array<PurchasePrice>;
  currentPurchasingUnitPrice?: number;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDefault?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  latestCurrentlyValidPrice?: PurchasePrice;
  purchasePrices?: Array<PurchasePrice>;
  vendor?: Vendor;
  vendorArticleId?: string;
  vendorId?: string;
}
