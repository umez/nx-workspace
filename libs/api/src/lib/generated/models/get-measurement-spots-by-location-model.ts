/* tslint:disable */
import { GetMeasurementSpotsByLocationSpotMeasureCommand } from './get-measurement-spots-by-location-spot-measure-command';
export interface GetMeasurementSpotsByLocationModel {
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
  spotMeasures?: Array<GetMeasurementSpotsByLocationSpotMeasureCommand>;
  type?: string;
}
