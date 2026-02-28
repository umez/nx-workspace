/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { PrintableEmailRecipient } from './printable-email-recipient';
import { PrintableFaxRecipient } from './printable-fax-recipient';
import { Unit } from './unit';
export interface ArticleUnit {
  allProperties?: Array<string>;
  amountPerBase?: number;
  articleId?: string;
  baseAmountPerUnit?: number;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  emailRecipients?: Array<PrintableEmailRecipient>;
  faxRecipients?: Array<PrintableFaxRecipient>;
  grossWeight?: number;
  gtin?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isBaseCode?: boolean;
  isBillOfMaterialsCode?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isIndivisibleCode?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isPriceCode?: boolean;
  isPurchasingCode?: boolean;
  isSalesCode?: boolean;
  isTrackable?: boolean;
  labelText?: string;
  netWeight?: number;
  unit?: Unit;
  unitCode?: string;
}
