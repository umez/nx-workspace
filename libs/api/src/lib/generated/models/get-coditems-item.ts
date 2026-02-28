/* tslint:disable */
import { GetCODItemsMeasureItem } from './get-coditems-measure-item';
export interface GetCODItemsItem {
  articleId?: string;
  articleMatchCode?: string;
  customArticleId?: string;
  description?: string;
  id?: number;
  isFloodingSurcharge?: boolean;
  isNew?: boolean;
  itemAcquisitionCosts?: number;
  itemPrice?: number;
  measureItems?: Array<GetCODItemsMeasureItem>;
  position?: number;
  priceListItemId?: string;
  profitMarginPercent?: number;
  quantity?: number;
  totalCalculationPrice?: number;
  totalCosts?: number;
  totalPrice?: number;
  unitCode?: string;
}
