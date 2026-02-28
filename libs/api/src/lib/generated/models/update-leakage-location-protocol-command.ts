/* tslint:disable */
import { UpdateLeakageLocationProtocolLeakageAttendingPersonModel } from './update-leakage-location-protocol-leakage-attending-person-model';
import { UpdateLeakageLocationProtocolLeakageImageModel } from './update-leakage-location-protocol-leakage-image-model';
import { UpdateLeakageLocationProtocolLeakageUsedEquipmentModel } from './update-leakage-location-protocol-leakage-used-equipment-model';
export interface UpdateLeakageLocationProtocolCommand {
  additionalAppointmentNeeded?: boolean;
  additionalAppointmentNeededReason?: string;
  appointmentType?: number;
  attendingPersons?: Array<UpdateLeakageLocationProtocolLeakageAttendingPersonModel>;
  date?: string;
  endDate?: string;
  furtherDamageExists?: boolean;
  isDamageFound?: boolean;
  isDamageLocationOpen?: boolean;
  isPhotoAvailable?: boolean;
  isTechnicalDryingNeeded?: boolean;
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
  protocolImages?: Array<UpdateLeakageLocationProtocolLeakageImageModel>;
  replacementTielAvailable?: string;
  reportDescription?: string;
  siteLeackageLocation?: string;
  startDate?: string;
  usedEquipment?: Array<UpdateLeakageLocationProtocolLeakageUsedEquipmentModel>;
  workingTime?: number;
}
