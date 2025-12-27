import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {DDR_WITH_CREDENTIALS_PATTERN} from '../tokens';

export const withCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
    const pattern = inject(DDR_WITH_CREDENTIALS_PATTERN, {optional: true});

    if (pattern === null || pattern.test(req.url)) {
        const cloned = req.clone({
            withCredentials: true
        });
        return next(cloned);
    }

    return next(req);
};
