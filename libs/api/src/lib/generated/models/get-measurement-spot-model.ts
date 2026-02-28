/* tslint:disable */
import { GetMeasurementSpotSpotMeasureCommand } from './get-measurement-spot-spot-measure-command';
export interface GetMeasurementSpotModel {
  blobId?: string;
  componentDescription?: string;
  constructionMethod?: string;
  device?: string;
  deviceOther?: string;
  height?: number;
  id?: number;
  isDielectricalMeasure?: boolean;
  isRelativeHumidity?: boolean;
  isResistencyTest?: boolean;
  measurementLocationId?: number;
  measurementProtocolId?: number;
  name?: string;
  referenceValue?: number;
  spotMeasures?: Array<GetMeasurementSpotSpotMeasureCommand>;
  type?: string;
}
