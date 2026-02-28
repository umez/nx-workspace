/* tslint:disable */
import { Address } from './address';
import { BrokenBusinessRule } from './broken-business-rule';
import { BusinessPartner } from './business-partner';
import { CaseOfDamageInsureeContactPerson } from './case-of-damage-insuree-contact-person';
import { IBusinessType } from './ibusiness-type';
export interface ContactPerson {
  address?: Address;
  addressId?: number;
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  businessPartner?: BusinessPartner;
  businessPartnerId?: string;
  caseOfDamageInsureeContactPerson?: CaseOfDamageInsureeContactPerson;
  changedBy?: string;
  changedTimestamp?: string;
  createdBy?: string;
  createdTimestamp?: string;
  dateOfBirth?: string;
  dependantObjects?: Array<IBusinessType>;
  division?: string;
  gdprConsignedTo?: string;
  gdprDataOrigin?: string;
  gdprDateOfDelivery?: string;
  gdprEmailSentTo?: string;
  gdprIsMessageSent?: boolean;
  gdprLanguage?: string;
  gdprSentBy?: string;
  group?: string;
  id?: number;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  position?: string;
  useBupaAddress?: boolean;
}
