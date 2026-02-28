/* tslint:disable */
export interface UpdateAppointmentCommand {
  adjustFromCOD?: boolean;
  appointmentTypeCode?: string;
  comment?: string;
  customerRecommandationDate?: string;
  customerRecommandationType?: string;
  description?: string;
  endDate?: string;
  isConsultationRequired?: boolean;
  isFixed?: boolean;
  loadingLocationId?: number;
  objectId?: string;
  requestedDuration?: number;
  requiredTechnicians?: number;
  startDate?: string;
  startTime?: string;
  subject?: string;
}
