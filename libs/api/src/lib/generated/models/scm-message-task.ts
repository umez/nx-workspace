/* tslint:disable */
import { ScmMessageReport } from './scm-message-report';
export interface ScmMessageTask {
  action?: string;
  begindate?: string;
  enddate?: string;
  hangfireId?: string;
  id?: string;
  messagesIds?: Array<string>;
  reports?: Array<ScmMessageReport>;
  status?: string;
  type?: string;
}
