/* tslint:disable */
import { UpdateMeasurementTaskMeasurementMeterCommand } from './update-measurement-task-measurement-meter-command';
import { UpdateMeasurementTaskMeasurementSpotCommand } from './update-measurement-task-measurement-spot-command';
export interface UpdateMeasurementTaskCommand {
  dateOfMeasurement?: string;
  description?: string;
  isFinalMeasurement?: boolean;
  isFirstMeasurement?: boolean;
  measurementMeterCommand?: Array<UpdateMeasurementTaskMeasurementMeterCommand>;
  measurementSpotCommand?: Array<UpdateMeasurementTaskMeasurementSpotCommand>;
  number?: number;
}
