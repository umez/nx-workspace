/* tslint:disable */
import { LeakageLocationAttendingPerson } from './leakage-location-attending-person';
import { LeakageLocationProtocolImage } from './leakage-location-protocol-image';
import { LeakageLocationUsedEquipment } from './leakage-location-used-equipment';
export interface GetLeakageProtocolModel {
  additionalAppointmentNeeded?: boolean;
  additionalAppointmentNeededReason?: string;
  appointmentType?: number;
  attendingPersons?: Array<LeakageLocationAttendingPerson>;
  damageFound?: boolean;
  damageLocationOpen?: boolean;
  date?: string;
  endDate?: string;
  furtherDamageExists?: boolean;
  id?: number;
  leakageSignature?: ArrayBuffer;
  photoAvailable?: boolean;
  pressureLossColdWater?: number;
  pressureLossDuration?: number;
  pressureLossHeating?: number;
  pressureLossWarmWater?: number;
  pressureTestCold?: boolean;
  pressureTestColdReason?: string;
  pressureTestHeating?: boolean;
  pressureTestHeatingReason?: string;
  pressureTestWarm?: boolean;
  pressureTestWarmReason?: string;
  protocolImage?: Array<LeakageLocationProtocolImage>;
  replacementTielAvailable?: string;
  reportDescription?: string;
  signature?: ArrayBuffer;
  siteLeackageLocation?: string;
  startDate?: string;
  technicalDryingNeeded?: boolean;
  usedEquipment?: Array<LeakageLocationUsedEquipment>;
  workingTime?: number;
}
