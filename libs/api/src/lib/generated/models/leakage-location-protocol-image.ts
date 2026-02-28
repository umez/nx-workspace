/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface LeakageLocationProtocolImage {
  allProperties?: Array<string>;
  blobId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  filename?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  image?: ArrayBuffer;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  llpE_Id?: number;
  migrationSuccess?: boolean;
}
