/* tslint:disable */
import { Type } from './type';
import { ConstructorInfo } from './constructor-info';
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
import { CustomAttributeNamedArgument } from './custom-attribute-named-argument';
export interface CustomAttributeData {
  attributeType?: Type;
  constructor?: ConstructorInfo;
  constructorArguments?: Array<CustomAttributeTypedArgument>;
  namedArguments?: Array<CustomAttributeNamedArgument>;
}
