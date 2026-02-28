/* tslint:disable */
import { ProcurementCostItemModel } from './procurement-cost-item-model';
export interface ProcurementCostItemsModel {
  items?: Array<ProcurementCostItemModel>;
  netPriceSum?: number;
  profitMargin?: number;
  profitMarginLO?: number;
  profitMarginLOProcurementCosts?: number;
  profitMarginPercent?: number;
  profitMarginPercurmentCosts?: number;
  profitMarginSAN?: number;
  profitMarginSANProcurementCosts?: number;
  profitMarginTRO?: number;
  profitMarginTROProcurementCosts?: number;
  settlementInvoicesTotalNetValue?: number;
  sumHekLo?: number;
  sumHekSan?: number;
  sumHekTro?: number;
}
