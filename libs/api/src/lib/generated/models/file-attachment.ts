/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
export interface FileAttachment {
  allProperties?: Array<string>;
  attachedToId?: string;
  attachedToType?: string;
  attachementType?: string;
  blobId?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  comment?: string;
  createdBy?: string;
  dependantObjects?: Array<IBusinessType>;
  fileData?: ArrayBuffer;
  filename?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  migrationSuccess?: boolean;
  tags?: Array<string>;
  timestamp?: string;
  type?: string;
  validityDate?: string;
}
