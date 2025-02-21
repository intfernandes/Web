import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UsersService } from '../_services/users.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const usersService = inject(UsersService);

  if (usersService.currentUser()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${usersService.currentUser()?.token}`,
      },
    });
  }

  return next(req);
};
