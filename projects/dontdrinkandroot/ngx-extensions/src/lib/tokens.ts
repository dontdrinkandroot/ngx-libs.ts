import {InjectionToken} from '@angular/core';

export const DDR_LOGIN_PATH = new InjectionToken<string>('DDR_LOGIN_PATH');
export const DDR_STORAGE_PREFIX = new InjectionToken<string>('DDR_STORAGE_PREFIX');
export const DDR_WITH_CREDENTIALS_PATTERN = new InjectionToken<RegExp>('DDR_WITH_CREDENTIALS_PATTERN');
