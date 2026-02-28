/* tslint:disable */
import { MemberInfo } from './member-info';
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
export interface CustomAttributeNamedArgument {
  isField?: boolean;
  memberInfo?: MemberInfo;
  memberName?: string;
  typedValue?: CustomAttributeTypedArgument;
}
