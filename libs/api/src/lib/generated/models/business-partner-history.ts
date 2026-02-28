/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { IBusinessType } from './ibusiness-type';
import { FileAttachment } from './file-attachment';
import { UserTask } from './user-task';
export interface BusinessPartnerHistory {
  allProperties?: Array<string>;
  attachableObjectId?: string;
  attachableObjectInfoString?: string;
  attachableObjectNavigationUrl?: string;
  attachableObjectType?: string;
  attachedToId?: string;
  attachedToType?: string;
  bphC_Code?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  businessPartnerId?: string;
  changedBy?: string;
  changedTimestamp?: string;
  createdBy?: string;
  createdTimestamp?: string;
  dependantObjects?: Array<IBusinessType>;
  fileAttachments?: Array<FileAttachment>;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  priority?: number;
  reminderDate?: string;
  sendTo?: string;
  showInOffer?: boolean;
  subject?: string;
  text?: string;
  userTasks?: Array<UserTask>;
}
