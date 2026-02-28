/* tslint:disable */
import { IResourceObject } from './iresource-object';
import { BrokenBusinessRule } from './broken-business-rule';
import { ResourceBooking } from './resource-booking';
import { IBusinessType } from './ibusiness-type';
import { ResourceStatus } from './resource-status';
export interface Resource {
  allProperties?: Array<string>;
  attachedObject?: IResourceObject;
  attachedObjectDescription?: string;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  comment?: string;
  countryCodeLocation?: string;
  currentResourceBooking?: ResourceBooking;
  currentResourceBookingId?: number;
  dependantObjects?: Array<IBusinessType>;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isExchangeEnabled?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  lat?: number;
  locationCity?: string;
  locationLatitude?: number;
  locationLongitude?: number;
  locationStreet?: string;
  locationZip?: string;
  lon?: number;
  objectId?: string;
  objectType?: string;
  resourceBookings?: Array<ResourceBooking>;
  resourceStatus?: ResourceStatus;
  resourceStatusCode?: string;
}
