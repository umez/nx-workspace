/* tslint:disable */
import { GetLoadingAppointementEquipement } from './get-loading-appointement-equipement';
import { GetLoadingAppointementWorkingOrderSummary } from './get-loading-appointement-working-order-summary';
export interface GetLoadingAppointementModel {
  address?: string;
  appointmentTypeCode?: string;
  changedBy?: string;
  changedTimestamp?: string;
  comment?: string;
  coordinateX?: string;
  coordinateY?: string;
  createdBy?: string;
  createdTimestamp?: string;
  customerRecommandationDate?: string;
  customerRecommandationType?: string;
  description?: string;
  employeesAssigned?: Array<string>;
  endDate?: string;
  equipements?: Array<GetLoadingAppointementEquipement>;
  id?: string;
  loadingComplete?: boolean;
  loadingLocationId?: number;
  objectId?: string;
  requestedDuration?: number;
  startDate?: string;
  startTime?: string;
  subject?: string;
  wos?: Array<GetLoadingAppointementWorkingOrderSummary>;
}
