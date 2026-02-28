/* tslint:disable */
import { XmlSchemaCompilationSettings } from './xml-schema-compilation-settings';
import { XmlSchemaObjectTable } from './xml-schema-object-table';
import { XmlNameTable } from './xml-name-table';
import { XmlResolver } from './xml-resolver';
export interface XmlSchemaSet {
  compilationSettings?: XmlSchemaCompilationSettings;
  count?: number;
  globalAttributes?: XmlSchemaObjectTable;
  globalElements?: XmlSchemaObjectTable;
  globalTypes?: XmlSchemaObjectTable;
  isCompiled?: boolean;
  nameTable?: XmlNameTable;
  xmlResolver?: XmlResolver;
}
