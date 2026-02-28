/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { KediDocumentType } from './kedi-document-type';
export interface KediDocumentPolicy {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  exchangeDirectory?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  kediDataFormatCode?: string;
  kediDocumentType?: KediDocumentType;
  kediDocumentTypeCode?: string;
  numberGroupCode?: string;
  numberGroupObject?: string;
}
