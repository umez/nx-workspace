/* tslint:disable */
import { GetCODItemsGroup } from './get-coditems-group';
import { GetCODItemsItem } from './get-coditems-item';
export interface GetCODItemsModel {
  groups?: Array<GetCODItemsGroup>;
  items?: Array<GetCODItemsItem>;
  totalCalculationPrice?: number;
  totalProfitMargin?: number;
  totalProfitMarginPercent?: number;
}
