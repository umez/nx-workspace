/* tslint:disable */
import { GetMeasurementProtocolMeterModel } from './get-measurement-protocol-meter-model';
export interface SearchMeasurementLocationModel {
  id?: number;
  meters?: Array<GetMeasurementProtocolMeterModel>;
  name?: string;
  status?: string;
}
