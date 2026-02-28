/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { TypeInfo } from './type-info';
import { MethodInfo } from './method-info';
import { Type } from './type';
import { Module } from './module';
export interface Assembly {
  codeBase?: string;
  customAttributes?: Array<CustomAttributeData>;
  definedTypes?: Array<TypeInfo>;
  entryPoint?: MethodInfo;
  escapedCodeBase?: string;
  exportedTypes?: Array<Type>;
  fullName?: string;
  globalAssemblyCache?: boolean;
  hostContext?: number;
  imageRuntimeVersion?: string;
  isCollectible?: boolean;
  isDynamic?: boolean;
  isFullyTrusted?: boolean;
  location?: string;
  manifestModule?: Module;
  modules?: Array<Module>;
  reflectionOnly?: boolean;
  securityRuleSet?: 0 | 1 | 2;
}
