/* tslint:disable */
import { IWorkflowAttachableObject } from './iworkflow-attachable-object';
import { BrokenBusinessRule } from './broken-business-rule';
import { User } from './user';
import { IBusinessType } from './ibusiness-type';
import { FileAttachment } from './file-attachment';
export interface UserTask {
  allProperties?: Array<string>;
  assignedToUserId?: string;
  attachableObjectId?: string;
  attachableObjectInfoString?: string;
  attachableObjectNavigationUrl?: string;
  attachableObjectType?: string;
  attachedObject?: IWorkflowAttachableObject;
  attachedObjectId?: string;
  attachedObjectType?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  changedBy?: string;
  changedTimestamp?: string;
  createdByUser?: User;
  createdByUserId?: string;
  createdTimestamp?: string;
  dependantObjects?: Array<IBusinessType>;
  dueDate?: string;
  fileAttachments?: Array<FileAttachment>;
  finishedByPercent?: number;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  priority?: string;
  startDate?: string;
  status?: string;
  subject?: string;
  text?: string;
}
