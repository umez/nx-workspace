/* tslint:disable */
import { DamageCalculationItem } from './damage-calculation-item';
export interface GetCODItemsGroup {
  code?: string;
  damageCalculationItems?: Array<DamageCalculationItem>;
  name?: string;
  parentCode?: string;
  position?: number;
  priceListItemId?: string;
  totalCalculationPrice?: number;
  totalCosts?: number;
  totalProfitMargin?: number;
  totalProfitMarginPercent?: number;
}
