/* tslint:disable */
export interface GetUnplannedAppointementByEmployeeModel {
  address?: string;
  adjustFromCOD?: boolean;
  amountOfDryingTechnicians?: number;
  appointmentTypeCode?: string;
  changedBy?: string;
  changedTimestamp?: string;
  codDescription?: string;
  codId?: string;
  comment?: string;
  coordinateX?: string;
  coordinateY?: string;
  createdBy?: string;
  createdTimestamp?: string;
  customerRecommandationDate?: string;
  customerRecommandationType?: string;
  description?: string;
  employeesAssigned?: Array<string>;
  endDate?: string;
  hasMultipleAppointments?: boolean;
  id?: string;
  isConsultationRequired?: boolean;
  isFixed?: boolean;
  isLeakageLocatorMandatory?: boolean;
  loadingLocationId?: number;
  objectId?: string;
  originalDate?: string;
  requestedDuration?: number;
  requiredTechnicians?: number;
  startDate?: string;
  startTime?: string;
  subject?: string;
}
