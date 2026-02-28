/* tslint:disable */
import { ScmMessageAttachment } from './scm-message-attachment';
import { ScmMessageTask } from './scm-message-task';
export interface ScmMessageMessage {
  action?: string;
  attachments?: Array<ScmMessageAttachment>;
  body?: string;
  date?: string;
  filenames?: string;
  id?: string;
  task?: ScmMessageTask;
  taskId?: string;
  taskReference?: string;
  title?: string;
  type?: 0 | 1;
}
