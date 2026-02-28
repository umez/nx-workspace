/* tslint:disable */
import { GetLoadingAppointementLocationSummary } from './get-loading-appointement-location-summary';
export interface GetLoadingAppointementWorkingOrderSummary {
  codId?: string;
  locations?: Array<GetLoadingAppointementLocationSummary>;
  workingOrderId?: string;
}
