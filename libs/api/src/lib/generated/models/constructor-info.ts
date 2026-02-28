/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { Type } from './type';
import { RuntimeMethodHandle } from './runtime-method-handle';
import { Module } from './module';
export interface ConstructorInfo {
  attributes?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768 | 53248;
  callingConvention?: 1 | 2 | 3 | 32 | 64;
  containsGenericParameters?: boolean;
  customAttributes?: Array<CustomAttributeData>;
  declaringType?: Type;
  isAbstract?: boolean;
  isAssembly?: boolean;
  isCollectible?: boolean;
  isConstructedGenericMethod?: boolean;
  isConstructor?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isFinal?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  isHideBySig?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  memberType?: 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191;
  metadataToken?: number;
  methodHandle?: RuntimeMethodHandle;
  methodImplementationFlags?: 0 | 1 | 2 | 3 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 4096 | 65535;
  module?: Module;
  name?: string;
  reflectedType?: Type;
}
