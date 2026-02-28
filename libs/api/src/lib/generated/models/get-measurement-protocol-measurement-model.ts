/* tslint:disable */
import { GetMeasurementProtocolMeasurementEntryModel } from './get-measurement-protocol-measurement-entry-model';
export interface GetMeasurementProtocolMeasurementModel {
  canBookTechnician?: boolean;
  drivingTimeBack?: string;
  drivingTimeTo?: string;
  employeeId?: string;
  entries?: Array<GetMeasurementProtocolMeasurementEntryModel>;
  finishingTime?: string;
  id?: number;
  isNextMeasurementNeeded?: boolean;
  nextMeasurementDate?: string;
  startingTime?: string;
  status?: string;
  workingTimeFinish?: string;
  workingTimeStart?: string;
}
