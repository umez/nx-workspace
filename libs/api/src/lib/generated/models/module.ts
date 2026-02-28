/* tslint:disable */
import { Assembly } from './assembly';
import { CustomAttributeData } from './custom-attribute-data';
import { ModuleHandle } from './module-handle';
export interface Module {
  assembly?: Assembly;
  customAttributes?: Array<CustomAttributeData>;
  fullyQualifiedName?: string;
  mdStreamVersion?: number;
  metadataToken?: number;
  moduleHandle?: ModuleHandle;
  moduleVersionId?: string;
  name?: string;
  scopeName?: string;
}
