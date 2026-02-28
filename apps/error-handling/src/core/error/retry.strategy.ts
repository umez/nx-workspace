import { retry } from 'rxjs/operators';

export function enterpriseRetryStrategy() {
  return retry({
    count: 2,
    delay: 1000
  });
}
