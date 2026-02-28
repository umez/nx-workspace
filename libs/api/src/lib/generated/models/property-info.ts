/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { Type } from './type';
import { MethodInfo } from './method-info';
import { Module } from './module';
export interface PropertyInfo {
  attributes?: 0 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 62464;
  canRead?: boolean;
  canWrite?: boolean;
  customAttributes?: Array<CustomAttributeData>;
  declaringType?: Type;
  getMethod?: MethodInfo;
  isCollectible?: boolean;
  isSpecialName?: boolean;
  memberType?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
  metadataToken?: number;
  module?: Module;
  name?: string;
  propertyType?: Type;
  reflectedType?: Type;
  setMethod?: MethodInfo;
}
