import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((res) => {
      if (res) {
        switch (res.status) {
          case 400:
            if (res.error.errors) {
              const errors = res.error.errors;
              const modalStateErrors = [];
              for (var key in errors) {
                if (errors[key]) {
                  modalStateErrors.push(errors[key]);
                }
              }
              throw modalStateErrors.flat();
            } else {
              toastr.error(res.error, res.status);
            }
            break;

          case 401:
            toastr.error('Unauthorized', res.status);
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const extras: NavigationExtras = { state: { error: res.error } };
            router.navigateByUrl('/server-error', extras);
            break;
          default:
            toastr.error('Something enuxpected went wrong');

            break;
        }
      }

      throw res;
    })
  );
};
