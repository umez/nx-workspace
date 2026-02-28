/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetPlannableItemsModel } from '../models/get-plannable-items-model';
import { GetAppointmentModel } from '../models/get-appointment-model';
import { GetAssignedTechniciansByAppointmentModel } from '../models/get-assigned-technicians-by-appointment-model';
import { GetTimeTrackingsByAppointmentModel } from '../models/get-time-trackings-by-appointment-model';
import { GetAppointmentEmployeeModel } from '../models/get-appointment-employee-model';
import { GetAppointmentReminderModel } from '../models/get-appointment-reminder-model';
import { GetUnplannedAppointementByEmployeeModel } from '../models/get-unplanned-appointement-by-employee-model';
import { GetLoadingAppointementsModel } from '../models/get-loading-appointements-model';
import { GetLoadingAppointementModel } from '../models/get-loading-appointement-model';
import { GetAppointmentRemindersByAppointement } from '../models/get-appointment-reminders-by-appointement';
import { CreateAppointmentCommand } from '../models/create-appointment-command';
import { UpdateAppointmentCommand } from '../models/update-appointment-command';
import { DeleteAppointmentCommand } from '../models/delete-appointment-command';
import { CreateAppointmentEmployeeCommand } from '../models/create-appointment-employee-command';
import { UpdateAppointmentEmployeeCommand } from '../models/update-appointment-employee-command';
import { CreateAppointmentTimeTrackingCommand } from '../models/create-appointment-time-tracking-command';
import { UpdateAppointmentTimeTrackingCommand } from '../models/update-appointment-time-tracking-command';
import { UpdateReminderCallCommand } from '../models/update-reminder-call-command';
@Injectable({
  providedIn: 'root',
})
class AppointmentsService extends __BaseService {
  static readonly GetPlannableItemsPath = '/v0/api/Appointments/PlannableItems';
  static readonly GetAppointmentPath = '/v0/api/Appointments/{id}';
  static readonly SetIsFixedPath = '/v0/api/Appointments/{id}';
  static readonly GetAppointmentsPath = '/v0/api/Appointments/GetAppointments';
  static readonly GetAssignedTechniciansByAppointmentPath = '/v0/api/Appointments/assignedTechnicians/{id}';
  static readonly GetTimeTrackingsByAppointmentPath = '/v0/api/Appointments/timeTrackings/{id}';
  static readonly GetAppointmentTypesPath = '/v0/api/Appointments/AppointmentTypes';
  static readonly GetAppointmentEmployeePath = '/v0/api/Appointments/AppointmentEmployee/{id}';
  static readonly DeleteAppointmentEmployeePath = '/v0/api/Appointments/AppointmentEmployee/{id}';
  static readonly GetAppointmentReminderPath = '/v0/api/Appointments/AppointmentReminder/{id}';
  static readonly DeleteReminderCallPath = '/v0/api/Appointments/AppointmentReminder/{id}';
  static readonly GetAppointementByEmployeePath = '/v0/api/Appointments/Employee/{id}';
  static readonly GetUnplannedAppointementByEmployeePath = '/v0/api/Appointments/cod/Unplanned';
  static readonly GetLoadingAppointementsPath = '/v0/api/Appointments/GetLoadingAppointements';
  static readonly GetLoadingAppointementPath = '/v0/api/Appointments/GetLoadingAppointement';
  static readonly GetAppointmentRemindersByAppointementPath = '/v0/api/Appointments/GetAppointmentRemindersByAppointement';
  static readonly CreateAppointmentPath = '/v0/api/Appointments';
  static readonly UpdateAppointmentPath = '/v0/api/Appointments';
  static readonly DeleteAppointmentPath = '/v0/api/Appointments';
  static readonly CreateAppointmentEmployeePath = '/v0/api/Appointments/AppointmentEmployee';
  static readonly UpdateAppointmentEmployeePath = '/v0/api/Appointments/AppointmentEmployee';
  static readonly CreateAppointmentTimeTrackingPath = '/v0/api/Appointments/AppointmentTimeTracking';
  static readonly UpdateAppointmentTimeTrackingPath = '/v0/api/Appointments/AppointmentTimeTracking';
  static readonly AddReminderCallPath = '/v0/api/Appointments/{id}/{isReminderCallEnabled}/reminderTimeBefore';
  static readonly UpdateReminderCallPath = '/v0/api/Appointments/UpdateReminderCall';
  static readonly MarkAppointmentAsLoadingCompletePath = '/v0/api/Appointments/{id}/Loading/{isComplete}';
  static readonly SetIsConsultationRequiredPath = '/v0/api/Appointments/{appointmentId}/SetIsConsultationRequired';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AppointmentsService.GetPlannableItemsParams` containing the following parameters:
   *
   * - `Zip`:
   *
   * - `TimeScope`:
   *
   * - `Street`:
   *
   * - `ObjectType`:
   *
   * - `District`:
   *
   * - `CodType`:
   *
   * - `City`:
   *
   * @return OK
   */
  GetPlannableItemsResponse(params: AppointmentsService.GetPlannableItemsParams): __Observable<__StrictHttpResponse<Array<GetPlannableItemsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Zip != null) __params = __params.set('Zip', params.Zip.toString());
    if (params.TimeScope != null) __params = __params.set('TimeScope', params.TimeScope.toString());
    if (params.Street != null) __params = __params.set('Street', params.Street.toString());
    if (params.ObjectType != null) __params = __params.set('ObjectType', params.ObjectType.toString());
    if (params.District != null) __params = __params.set('District', params.District.toString());
    if (params.CodType != null) __params = __params.set('CodType', params.CodType.toString());
    if (params.City != null) __params = __params.set('City', params.City.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/PlannableItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetPlannableItemsModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetPlannableItemsParams` containing the following parameters:
   *
   * - `Zip`:
   *
   * - `TimeScope`:
   *
   * - `Street`:
   *
   * - `ObjectType`:
   *
   * - `District`:
   *
   * - `CodType`:
   *
   * - `City`:
   *
   * @return OK
   */
  GetPlannableItems(params: AppointmentsService.GetPlannableItemsParams): __Observable<Array<GetPlannableItemsModel>> {
    return this.GetPlannableItemsResponse(params).pipe(
      __map(_r => _r.body as Array<GetPlannableItemsModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetAppointmentResponse(id: string): __Observable<__StrictHttpResponse<GetAppointmentModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetAppointmentModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetAppointment(id: string): __Observable<GetAppointmentModel> {
    return this.GetAppointmentResponse(id).pipe(
      __map(_r => _r.body as GetAppointmentModel)
    );
  }

  /**
   * @param params The `AppointmentsService.SetIsFixedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `isFixed`:
   */
  SetIsFixedResponse(params: AppointmentsService.SetIsFixedParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.isFixed != null) __params = __params.set('isFixed', params.isFixed.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/Appointments/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.SetIsFixedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `isFixed`:
   */
  SetIsFixed(params: AppointmentsService.SetIsFixedParams): __Observable<null> {
    return this.SetIsFixedResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentsService.GetAppointmentsParams` containing the following parameters:
   *
   * - `zip`:
   *
   * - `street`:
   *
   * - `startDate`:
   *
   * - `objectType`:
   *
   * - `objectId`:
   *
   * - `endDate`:
   *
   * - `district`:
   *
   * - `codId`:
   *
   * - `city`:
   *
   * @return OK
   */
  GetAppointmentsResponse(params: AppointmentsService.GetAppointmentsParams): __Observable<__StrictHttpResponse<Array<GetAppointmentModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.zip != null) __params = __params.set('zip', params.zip.toString());
    if (params.street != null) __params = __params.set('street', params.street.toString());
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.objectType != null) __params = __params.set('objectType', params.objectType.toString());
    if (params.objectId != null) __params = __params.set('objectId', params.objectId.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    if (params.district != null) __params = __params.set('district', params.district.toString());
    if (params.codId != null) __params = __params.set('codId', params.codId.toString());
    if (params.city != null) __params = __params.set('city', params.city.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/GetAppointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetAppointmentModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetAppointmentsParams` containing the following parameters:
   *
   * - `zip`:
   *
   * - `street`:
   *
   * - `startDate`:
   *
   * - `objectType`:
   *
   * - `objectId`:
   *
   * - `endDate`:
   *
   * - `district`:
   *
   * - `codId`:
   *
   * - `city`:
   *
   * @return OK
   */
  GetAppointments(params: AppointmentsService.GetAppointmentsParams): __Observable<Array<GetAppointmentModel>> {
    return this.GetAppointmentsResponse(params).pipe(
      __map(_r => _r.body as Array<GetAppointmentModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetAssignedTechniciansByAppointmentResponse(id: string): __Observable<__StrictHttpResponse<Array<GetAssignedTechniciansByAppointmentModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/assignedTechnicians/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetAssignedTechniciansByAppointmentModel>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetAssignedTechniciansByAppointment(id: string): __Observable<Array<GetAssignedTechniciansByAppointmentModel>> {
    return this.GetAssignedTechniciansByAppointmentResponse(id).pipe(
      __map(_r => _r.body as Array<GetAssignedTechniciansByAppointmentModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetTimeTrackingsByAppointmentResponse(id: string): __Observable<__StrictHttpResponse<Array<GetTimeTrackingsByAppointmentModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/timeTrackings/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetTimeTrackingsByAppointmentModel>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetTimeTrackingsByAppointment(id: string): __Observable<Array<GetTimeTrackingsByAppointmentModel>> {
    return this.GetTimeTrackingsByAppointmentResponse(id).pipe(
      __map(_r => _r.body as Array<GetTimeTrackingsByAppointmentModel>)
    );
  }

  /**
   * @return OK
   */
  GetAppointmentTypesResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/AppointmentTypes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  GetAppointmentTypes(): __Observable<Array<string>> {
    return this.GetAppointmentTypesResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetAppointmentEmployeeResponse(id: number): __Observable<__StrictHttpResponse<GetAppointmentEmployeeModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/AppointmentEmployee/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetAppointmentEmployeeModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetAppointmentEmployee(id: number): __Observable<GetAppointmentEmployeeModel> {
    return this.GetAppointmentEmployeeResponse(id).pipe(
      __map(_r => _r.body as GetAppointmentEmployeeModel)
    );
  }

  /**
   * @param id undefined
   */
  DeleteAppointmentEmployeeResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/Appointments/AppointmentEmployee/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteAppointmentEmployee(id: number): __Observable<null> {
    return this.DeleteAppointmentEmployeeResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetAppointmentReminderResponse(id: number): __Observable<__StrictHttpResponse<GetAppointmentReminderModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/AppointmentReminder/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetAppointmentReminderModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetAppointmentReminder(id: number): __Observable<GetAppointmentReminderModel> {
    return this.GetAppointmentReminderResponse(id).pipe(
      __map(_r => _r.body as GetAppointmentReminderModel)
    );
  }

  /**
   * @param id undefined
   */
  DeleteReminderCallResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/Appointments/AppointmentReminder/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteReminderCall(id: number): __Observable<null> {
    return this.DeleteReminderCallResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentsService.GetAppointementByEmployeeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `startDate`:
   *
   * - `includeOutlookAppointements`:
   *
   * - `includeOnlyOutlookAppointements`:
   *
   * - `endDate`:
   *
   * @return OK
   */
  GetAppointementByEmployeeResponse(params: AppointmentsService.GetAppointementByEmployeeParams): __Observable<__StrictHttpResponse<Array<GetAppointmentEmployeeModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.includeOutlookAppointements != null) __params = __params.set('includeOutlookAppointements', params.includeOutlookAppointements.toString());
    if (params.includeOnlyOutlookAppointements != null) __params = __params.set('includeOnlyOutlookAppointements', params.includeOnlyOutlookAppointements.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/Employee/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetAppointmentEmployeeModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetAppointementByEmployeeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `startDate`:
   *
   * - `includeOutlookAppointements`:
   *
   * - `includeOnlyOutlookAppointements`:
   *
   * - `endDate`:
   *
   * @return OK
   */
  GetAppointementByEmployee(params: AppointmentsService.GetAppointementByEmployeeParams): __Observable<Array<GetAppointmentEmployeeModel>> {
    return this.GetAppointementByEmployeeResponse(params).pipe(
      __map(_r => _r.body as Array<GetAppointmentEmployeeModel>)
    );
  }

  /**
   * @param params The `AppointmentsService.GetUnplannedAppointementByEmployeeParams` containing the following parameters:
   *
   * - `zip`:
   *
   * - `street`:
   *
   * - `startDate`:
   *
   * - `endDate`:
   *
   * - `district`:
   *
   * - `city`:
   *
   * @return OK
   */
  GetUnplannedAppointementByEmployeeResponse(params: AppointmentsService.GetUnplannedAppointementByEmployeeParams): __Observable<__StrictHttpResponse<Array<GetUnplannedAppointementByEmployeeModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.zip != null) __params = __params.set('zip', params.zip.toString());
    if (params.street != null) __params = __params.set('street', params.street.toString());
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    if (params.district != null) __params = __params.set('district', params.district.toString());
    if (params.city != null) __params = __params.set('city', params.city.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/cod/Unplanned`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetUnplannedAppointementByEmployeeModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetUnplannedAppointementByEmployeeParams` containing the following parameters:
   *
   * - `zip`:
   *
   * - `street`:
   *
   * - `startDate`:
   *
   * - `endDate`:
   *
   * - `district`:
   *
   * - `city`:
   *
   * @return OK
   */
  GetUnplannedAppointementByEmployee(params: AppointmentsService.GetUnplannedAppointementByEmployeeParams): __Observable<Array<GetUnplannedAppointementByEmployeeModel>> {
    return this.GetUnplannedAppointementByEmployeeResponse(params).pipe(
      __map(_r => _r.body as Array<GetUnplannedAppointementByEmployeeModel>)
    );
  }

  /**
   * @param params The `AppointmentsService.GetLoadingAppointementsParams` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `objectId`:
   *
   * - `endDate`:
   *
   * - `employeeId`:
   *
   * @return OK
   */
  GetLoadingAppointementsResponse(params: AppointmentsService.GetLoadingAppointementsParams): __Observable<__StrictHttpResponse<Array<GetLoadingAppointementsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.objectId != null) __params = __params.set('objectId', params.objectId.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/GetLoadingAppointements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetLoadingAppointementsModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetLoadingAppointementsParams` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `objectId`:
   *
   * - `endDate`:
   *
   * - `employeeId`:
   *
   * @return OK
   */
  GetLoadingAppointements(params: AppointmentsService.GetLoadingAppointementsParams): __Observable<Array<GetLoadingAppointementsModel>> {
    return this.GetLoadingAppointementsResponse(params).pipe(
      __map(_r => _r.body as Array<GetLoadingAppointementsModel>)
    );
  }

  /**
   * @param params The `AppointmentsService.GetLoadingAppointementParams` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `employeeId`:
   *
   * - `AppointmentId`:
   *
   * @return OK
   */
  GetLoadingAppointementResponse(params: AppointmentsService.GetLoadingAppointementParams): __Observable<__StrictHttpResponse<Array<GetLoadingAppointementModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
    if (params.AppointmentId != null) __params = __params.set('AppointmentId', params.AppointmentId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/GetLoadingAppointement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetLoadingAppointementModel>>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.GetLoadingAppointementParams` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `employeeId`:
   *
   * - `AppointmentId`:
   *
   * @return OK
   */
  GetLoadingAppointement(params: AppointmentsService.GetLoadingAppointementParams): __Observable<Array<GetLoadingAppointementModel>> {
    return this.GetLoadingAppointementResponse(params).pipe(
      __map(_r => _r.body as Array<GetLoadingAppointementModel>)
    );
  }

  /**
   * @param appointementId undefined
   * @return OK
   */
  GetAppointmentRemindersByAppointementResponse(appointementId?: string): __Observable<__StrictHttpResponse<Array<GetAppointmentRemindersByAppointement>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (appointementId != null) __params = __params.set('appointementId', appointementId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/Appointments/GetAppointmentRemindersByAppointement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetAppointmentRemindersByAppointement>>;
      })
    );
  }
  /**
   * @param appointementId undefined
   * @return OK
   */
  GetAppointmentRemindersByAppointement(appointementId?: string): __Observable<Array<GetAppointmentRemindersByAppointement>> {
    return this.GetAppointmentRemindersByAppointementResponse(appointementId).pipe(
      __map(_r => _r.body as Array<GetAppointmentRemindersByAppointement>)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointmentResponse(command?: CreateAppointmentCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/Appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointment(command?: CreateAppointmentCommand): __Observable<{[key: string]: any}> {
    return this.CreateAppointmentResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param params The `AppointmentsService.UpdateAppointmentParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateAppointmentResponse(params: AppointmentsService.UpdateAppointmentParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/Appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.UpdateAppointmentParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateAppointment(params: AppointmentsService.UpdateAppointmentParams): __Observable<null> {
    return this.UpdateAppointmentResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   */
  DeleteAppointmentResponse(command?: DeleteAppointmentCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/Appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  DeleteAppointment(command?: DeleteAppointmentCommand): __Observable<null> {
    return this.DeleteAppointmentResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointmentEmployeeResponse(command?: CreateAppointmentEmployeeCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/Appointments/AppointmentEmployee`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointmentEmployee(command?: CreateAppointmentEmployeeCommand): __Observable<{[key: string]: any}> {
    return this.CreateAppointmentEmployeeResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param command undefined
   */
  UpdateAppointmentEmployeeResponse(command?: UpdateAppointmentEmployeeCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/Appointments/AppointmentEmployee`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  UpdateAppointmentEmployee(command?: UpdateAppointmentEmployeeCommand): __Observable<null> {
    return this.UpdateAppointmentEmployeeResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointmentTimeTrackingResponse(command?: CreateAppointmentTimeTrackingCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/Appointments/AppointmentTimeTracking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateAppointmentTimeTracking(command?: CreateAppointmentTimeTrackingCommand): __Observable<{[key: string]: any}> {
    return this.CreateAppointmentTimeTrackingResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param params The `AppointmentsService.UpdateAppointmentTimeTrackingParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateAppointmentTimeTrackingResponse(params: AppointmentsService.UpdateAppointmentTimeTrackingParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/Appointments/AppointmentTimeTracking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.UpdateAppointmentTimeTrackingParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateAppointmentTimeTracking(params: AppointmentsService.UpdateAppointmentTimeTrackingParams): __Observable<null> {
    return this.UpdateAppointmentTimeTrackingResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentsService.AddReminderCallParams` containing the following parameters:
   *
   * - `isReminderCallEnabled`:
   *
   * - `id`:
   *
   * - `telephone`:
   *
   * - `reminderTimeBefore`:
   *
   * - `contactPersonId`:
   *
   * - `comment`:
   */
  AddReminderCallResponse(params: AppointmentsService.AddReminderCallParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.telephone != null) __params = __params.set('telephone', params.telephone.toString());
    if (params.reminderTimeBefore != null) __params = __params.set('reminderTimeBefore', params.reminderTimeBefore.toString());
    if (params.contactPersonId != null) __params = __params.set('contactPersonId', params.contactPersonId.toString());
    if (params.comment != null) __params = __params.set('comment', params.comment.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/Appointments/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.isReminderCallEnabled))}/reminderTimeBefore`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.AddReminderCallParams` containing the following parameters:
   *
   * - `isReminderCallEnabled`:
   *
   * - `id`:
   *
   * - `telephone`:
   *
   * - `reminderTimeBefore`:
   *
   * - `contactPersonId`:
   *
   * - `comment`:
   */
  AddReminderCall(params: AppointmentsService.AddReminderCallParams): __Observable<null> {
    return this.AddReminderCallResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   */
  UpdateReminderCallResponse(command?: UpdateReminderCallCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/Appointments/UpdateReminderCall`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  UpdateReminderCall(command?: UpdateReminderCallCommand): __Observable<null> {
    return this.UpdateReminderCallResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentsService.MarkAppointmentAsLoadingCompleteParams` containing the following parameters:
   *
   * - `isComplete`:
   *
   * - `id`:
   */
  MarkAppointmentAsLoadingCompleteResponse(params: AppointmentsService.MarkAppointmentAsLoadingCompleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/Appointments/${encodeURIComponent(String(params.id))}/Loading/${encodeURIComponent(String(params.isComplete))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.MarkAppointmentAsLoadingCompleteParams` containing the following parameters:
   *
   * - `isComplete`:
   *
   * - `id`:
   */
  MarkAppointmentAsLoadingComplete(params: AppointmentsService.MarkAppointmentAsLoadingCompleteParams): __Observable<null> {
    return this.MarkAppointmentAsLoadingCompleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentsService.SetIsConsultationRequiredParams` containing the following parameters:
   *
   * - `appointmentId`:
   *
   * - `isRequired`:
   */
  SetIsConsultationRequiredResponse(params: AppointmentsService.SetIsConsultationRequiredParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.isRequired != null) __params = __params.set('isRequired', params.isRequired.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/Appointments/${encodeURIComponent(String(params.appointmentId))}/SetIsConsultationRequired`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentsService.SetIsConsultationRequiredParams` containing the following parameters:
   *
   * - `appointmentId`:
   *
   * - `isRequired`:
   */
  SetIsConsultationRequired(params: AppointmentsService.SetIsConsultationRequiredParams): __Observable<null> {
    return this.SetIsConsultationRequiredResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AppointmentsService {

  /**
   * Parameters for GetPlannableItems
   */
  export interface GetPlannableItemsParams {
    Zip?: string;
    TimeScope?: number;
    Street?: string;
    ObjectType?: string;
    District?: string;
    CodType?: string;
    City?: string;
  }

  /**
   * Parameters for SetIsFixed
   */
  export interface SetIsFixedParams {
    id: string;
    isFixed?: boolean;
  }

  /**
   * Parameters for GetAppointments
   */
  export interface GetAppointmentsParams {
    zip?: string;
    street?: string;
    startDate?: string;
    objectType?: string;
    objectId?: string;
    endDate?: string;
    district?: string;
    codId?: string;
    city?: string;
  }

  /**
   * Parameters for GetAppointementByEmployee
   */
  export interface GetAppointementByEmployeeParams {
    id: string;
    startDate?: string;
    includeOutlookAppointements?: boolean;
    includeOnlyOutlookAppointements?: boolean;
    endDate?: string;
  }

  /**
   * Parameters for GetUnplannedAppointementByEmployee
   */
  export interface GetUnplannedAppointementByEmployeeParams {
    zip?: string;
    street?: string;
    startDate?: string;
    endDate?: string;
    district?: string;
    city?: string;
  }

  /**
   * Parameters for GetLoadingAppointements
   */
  export interface GetLoadingAppointementsParams {
    startDate?: string;
    objectId?: string;
    endDate?: string;
    employeeId?: string;
  }

  /**
   * Parameters for GetLoadingAppointement
   */
  export interface GetLoadingAppointementParams {
    startDate?: string;
    employeeId?: string;
    AppointmentId?: string;
  }

  /**
   * Parameters for UpdateAppointment
   */
  export interface UpdateAppointmentParams {
    id?: string;
    command?: UpdateAppointmentCommand;
  }

  /**
   * Parameters for UpdateAppointmentTimeTracking
   */
  export interface UpdateAppointmentTimeTrackingParams {
    id?: string;
    command?: UpdateAppointmentTimeTrackingCommand;
  }

  /**
   * Parameters for AddReminderCall
   */
  export interface AddReminderCallParams {
    isReminderCallEnabled: boolean;
    id: string;
    telephone?: string;
    reminderTimeBefore?: number;
    contactPersonId?: number;
    comment?: string;
  }

  /**
   * Parameters for MarkAppointmentAsLoadingComplete
   */
  export interface MarkAppointmentAsLoadingCompleteParams {
    isComplete: boolean;
    id: string;
  }

  /**
   * Parameters for SetIsConsultationRequired
   */
  export interface SetIsConsultationRequiredParams {
    appointmentId: string;
    isRequired?: boolean;
  }
}

export { AppointmentsService }
