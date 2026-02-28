/* tslint:disable */
import { BrokenBusinessRule } from './broken-business-rule';
import { Type } from './type';
import { IBusinessType } from './ibusiness-type';
import { XmlSchemaSet } from './xml-schema-set';
export interface KediDocumentType {
  allProperties?: Array<string>;
  brokenBusinessRules?: Array<BrokenBusinessRule>;
  businessObjectCollectionType?: Type;
  businessObjectType?: Type;
  code?: string;
  dependantObjects?: Array<IBusinessType>;
  description?: string;
  direction?: string;
  fullTypeName?: string;
  ignoreNullOrEmptyStringsInPropertyChangedEvent?: boolean;
  isDirty?: boolean;
  isDirtyWithDependantObjects?: boolean;
  isMarkedForDeletion?: boolean;
  isNew?: boolean;
  isTrackable?: boolean;
  xmlSchemas?: XmlSchemaSet;
  xsdSchemaLocation?: string;
}
