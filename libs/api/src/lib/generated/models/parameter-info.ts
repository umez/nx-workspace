/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberInfo } from './member-info';
import { Type } from './type';
export interface ParameterInfo {
  attributes?: 0 | 1 | 2 | 4 | 8 | 16 | 4096 | 8192 | 16384 | 32768 | 61440;
  customAttributes?: Array<CustomAttributeData>;
  defaultValue?: any;
  hasDefaultValue?: boolean;
  isIn?: boolean;
  isLcid?: boolean;
  isOptional?: boolean;
  isOut?: boolean;
  isRetval?: boolean;
  member?: MemberInfo;
  metadataToken?: number;
  name?: string;
  parameterType?: Type;
  position?: number;
  rawDefaultValue?: any;
}
