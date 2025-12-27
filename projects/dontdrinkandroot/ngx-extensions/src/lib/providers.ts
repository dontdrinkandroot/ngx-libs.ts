import {EnvironmentProviders, makeEnvironmentProviders, Type} from '@angular/core';
import {Storage} from './storage/storage';
import {DDR_LOGIN_PATH, DDR_STORAGE_PREFIX, DDR_WITH_CREDENTIALS_PATTERN} from './tokens';
import {Logger} from "./logger/logger";
import {ConsoleLogger} from "./logger/console-logger";
import {LocalStorageStorage} from "./storage/local-storage-storage";

/**
 * Provides the Logger service.
 */
export function provideDdrLogger(options?: {
    implementation?: Type<Logger>
}): EnvironmentProviders
{
    return makeEnvironmentProviders([
        {
            provide: Logger,
            useClass: options?.implementation ?? ConsoleLogger
        }
    ]);
}

/**
 * Provides the Storage service with an optional prefix.
 */
export function provideDdrStorage(options?: {
    prefix?: string,
    implementation?: Type<Storage>
}): EnvironmentProviders
{
    return makeEnvironmentProviders([
        {
            provide: DDR_STORAGE_PREFIX,
            useValue: options?.prefix ?? 'ddr'
        },
        {
            provide: Storage,
            useClass: options?.implementation ?? LocalStorageStorage
        }
    ]);
}

/**
 * Provides the RedirectToLogin configuration.
 */
export function provideDdrRedirectToLoginPath(loginPath: string = '/login'): EnvironmentProviders
{
    return makeEnvironmentProviders([
        {
            provide: DDR_LOGIN_PATH,
            useValue: loginPath
        }
    ]);
}

/**
 * Provides the WithCredentials configuration.
 */
export function provideDdrWithCredentialsPattern(pattern: RegExp = /.*/): EnvironmentProviders
{
    return makeEnvironmentProviders([
        {
            provide: DDR_WITH_CREDENTIALS_PATTERN,
            useValue: pattern
        }
    ]);
}
