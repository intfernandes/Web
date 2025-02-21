import { CanActivateFn } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const users = inject(UsersService);
  const toastr = inject(ToastrService);

  if (users.currentUser()) {
    return true;
  } else {
    toastr.error('You must be loged to access this resource');
    return false;
  }
};
