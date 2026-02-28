/* tslint:disable */
import { UpdateMeasurementSpotSpotMeasureCommand } from './update-measurement-spot-spot-measure-command';
export interface UpdateMeasurementSpotCommand {
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
  name?: string;
  referenceValue?: number;
  spotMeasureCommand?: Array<UpdateMeasurementSpotSpotMeasureCommand>;
  type?: string;
}
