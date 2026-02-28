import { ErrorLevel } from "./error-level.enum";

export interface AppError {
  message: string;
  level: ErrorLevel;
  timestamp: string;
  stack?: string;
  statusCode?: number;
  feature?: string;
  userId?: string;
  url?: string;
}
