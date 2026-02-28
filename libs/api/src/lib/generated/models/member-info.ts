/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { Type } from './type';
import { Module } from './module';
export interface MemberInfo {
  customAttributes?: Array<CustomAttributeData>;
  declaringType?: Type;
  isCollectible?: boolean;
  memberType?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
  metadataToken?: number;
  module?: Module;
  name?: string;
  reflectedType?: Type;
}
