/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { Type } from './type';
import { RuntimeFieldHandle } from './runtime-field-handle';
import { Module } from './module';
export interface FieldInfo {
  attributes?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 4096 | 8192 | 32768 | 38144;
  customAttributes?: Array<CustomAttributeData>;
  declaringType?: Type;
  fieldHandle?: RuntimeFieldHandle;
  fieldType?: Type;
  isAssembly?: boolean;
  isCollectible?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isInitOnly?: boolean;
  isLiteral?: boolean;
  isNotSerialized?: boolean;
  isPinvokeImpl?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  memberType?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
  metadataToken?: number;
  module?: Module;
  name?: string;
  reflectedType?: Type;
}
