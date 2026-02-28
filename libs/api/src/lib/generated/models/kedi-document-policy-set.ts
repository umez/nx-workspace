/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { KediDocumentPolicy } from './kedi-document-policy';
export interface KediDocumentPolicySet {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  documentPolicies?: Array<KediDocumentPolicy>;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
}
