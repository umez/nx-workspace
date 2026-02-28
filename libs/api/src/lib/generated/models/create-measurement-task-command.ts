/* tslint:disable */
import { CreateMeasurementTaskMeasurementSpotCommand } from './create-measurement-task-measurement-spot-command';
export interface CreateMeasurementTaskCommand {
  dateOfMeasurement?: string;
  description?: string;
  isFinalMeasurement?: boolean;
  isFirstMeasurement?: boolean;
  measurementSpotCommand?: Array<CreateMeasurementTaskMeasurementSpotCommand>;
  number?: number;
}
