/* tslint:disable */
import { CreateLeakageLocationProtocolModel } from './create-leakage-location-protocol-model';
export interface CreateLeakageLocationProtocolCommand {
  attendinPersons?: Array<CreateLeakageLocationProtocolModel>;
  endDate?: string;
  llpDate?: string;
  startDate?: string;
  workingTime?: number;
}
