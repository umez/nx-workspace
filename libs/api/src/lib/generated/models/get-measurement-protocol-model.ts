/* tslint:disable */
import { GetMeasurementProtocolLocationModel } from './get-measurement-protocol-location-model';
import { GetMeasurementProtocolMeasurementModel } from './get-measurement-protocol-measurement-model';
import { GetMeasurementProtocolMeterModel } from './get-measurement-protocol-meter-model';
import { GetMeasurementProtocolSpotModel } from './get-measurement-protocol-spot-model';
import { GetMeasurementProtocolTaskModel } from './get-measurement-protocol-task-model';
export interface GetMeasurementProtocolModel {
  changedBy?: string;
  changedTimestamp?: string;
  createdBy?: string;
  createdTimestamp?: string;
  id?: number;
  locations?: Array<GetMeasurementProtocolLocationModel>;
  measurements?: Array<GetMeasurementProtocolMeasurementModel>;
  meters?: Array<GetMeasurementProtocolMeterModel>;
  name?: string;
  spots?: Array<GetMeasurementProtocolSpotModel>;
  tasks?: Array<GetMeasurementProtocolTaskModel>;
}
