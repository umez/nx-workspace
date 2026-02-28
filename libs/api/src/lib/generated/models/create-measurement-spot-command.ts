/* tslint:disable */
import { CreateMeasurementSpotSpotMeasureCommand } from './create-measurement-spot-spot-measure-command';
export interface CreateMeasurementSpotCommand {
  blobId?: string;
  componentDescription?: string;
  constructionMethod?: string;
  device?: string;
  deviceOther?: string;
  height?: number;
  isDielectricalMeasure?: boolean;
  isRelativeHumidity?: boolean;
  isResistencyTest?: boolean;
  measurementLocationId?: number;
  measurementProtocolId?: number;
  name?: string;
  referenceValue?: number;
  spotMeasureCommand?: Array<CreateMeasurementSpotSpotMeasureCommand>;
  type?: string;
}
