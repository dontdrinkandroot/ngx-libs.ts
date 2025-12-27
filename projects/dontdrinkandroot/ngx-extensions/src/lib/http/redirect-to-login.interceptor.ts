import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import {DDR_LOGIN_PATH} from '../tokens';

export const redirectToLoginInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const loginPath = inject(DDR_LOGIN_PATH, {optional: true}) ?? '/login';

    return next(req).pipe(
        catchError((err) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                router.navigate([loginPath]);
            }
            return throwError(() => err);
        })
    );
};
