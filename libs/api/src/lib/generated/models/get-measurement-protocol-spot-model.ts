/* tslint:disable */
import { GetMeasurementProtocolSpotMeasure } from './get-measurement-protocol-spot-measure';
export interface GetMeasurementProtocolSpotModel {
  blobId?: string;
  componentDescription?: string;
  constructionMethod?: string;
  height?: number;
  id?: number;
  isDielectricalMeasure?: boolean;
  isRelativeHumidity?: boolean;
  isResistencyTest?: boolean;
  measurementDevice?: string;
  measurementDeviceOther?: string;
  measurementLocationId?: number;
  name?: string;
  referenceValue?: number;
  spotMeasures?: Array<GetMeasurementProtocolSpotMeasure>;
  type?: string;
}
