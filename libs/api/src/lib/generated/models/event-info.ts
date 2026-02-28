/* tslint:disable */
import { MethodInfo } from './method-info';
import { CustomAttributeData } from './custom-attribute-data';
import { Type } from './type';
import { Module } from './module';
export interface EventInfo {
  addMethod?: MethodInfo;
  attributes?: 0 | 512 | 1024;
  customAttributes?: Array<CustomAttributeData>;
  declaringType?: Type;
  eventHandlerType?: Type;
  isCollectible?: boolean;
  isMulticast?: boolean;
  isSpecialName?: boolean;
  memberType?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
  metadataToken?: number;
  module?: Module;
  name?: string;
  raiseMethod?: MethodInfo;
  reflectedType?: Type;
  removeMethod?: MethodInfo;
}
