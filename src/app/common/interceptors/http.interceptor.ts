import type { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { BASE_URL } from '../constants';
import { handleRequest } from '../utils';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const newUrl =`${BASE_URL}/${req.url}`;
  const newRequest: HttpRequest<unknown> = req.clone({ url: newUrl});
  return handleRequest(newRequest, next);
};
