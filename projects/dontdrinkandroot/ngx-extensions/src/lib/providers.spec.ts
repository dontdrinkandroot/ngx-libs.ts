import {TestBed} from '@angular/core/testing';
import {describe, expect, it, vi} from 'vitest';
import {provideDdrLogger, provideDdrRedirectToLoginPath, provideDdrStorage, provideDdrWithCredentialsPattern} from './providers';
import {Storage} from './storage/storage';
import {DDR_LOGIN_PATH, DDR_STORAGE_PREFIX, DDR_WITH_CREDENTIALS_PATTERN} from './tokens';
import {Injectable} from '@angular/core';
import {Logger} from "./logger/logger";
import {ConsoleLogger} from "./logger/console-logger";
import {LocalStorageStorage} from "./storage/local-storage-storage";

@Injectable()
class MockLogger extends Logger
{
    debug = vi.fn();
    info = vi.fn();
    warn = vi.fn();
    error = vi.fn();
}

@Injectable()
class MockStorage extends Storage
{
    store = vi.fn();
    retrieve = vi.fn();
    remove = vi.fn();
}

describe('Providers', () => {
    describe('provideDdrLogger', () => {
        it('should provide ConsoleLogger by default', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrLogger()]
            });
            const logger = TestBed.inject(Logger);
            expect(logger).toBeInstanceOf(ConsoleLogger);
        });

        it('should provide custom implementation', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrLogger({implementation: MockLogger})]
            });
            const logger = TestBed.inject(Logger);
            expect(logger).toBeInstanceOf(MockLogger);
        });
    });

    describe('provideDdrStorage', () => {
        it('should provide LocalStorageService and default prefix', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrLogger(), provideDdrStorage()]
            });
            const storage = TestBed.inject(Storage);
            const prefix = TestBed.inject(DDR_STORAGE_PREFIX);
            expect(storage).toBeInstanceOf(LocalStorageStorage);
            expect(prefix).toBe('ddr');
        });

        it('should provide custom implementation and prefix', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrStorage({prefix: 'custom', implementation: MockStorage})]
            });
            const storage = TestBed.inject(Storage);
            const prefix = TestBed.inject(DDR_STORAGE_PREFIX);
            expect(storage).toBeInstanceOf(MockStorage);
            expect(prefix).toBe('custom');
        });
    });

    describe('provideDdrRedirectToLoginPath', () => {
        it('should provide login path', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrRedirectToLoginPath('/custom-login')]
            });
            const loginPath = TestBed.inject(DDR_LOGIN_PATH);
            expect(loginPath).toBe('/custom-login');
        });

        it('should use default login path', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrRedirectToLoginPath()]
            });
            const loginPath = TestBed.inject(DDR_LOGIN_PATH);
            expect(loginPath).toBe('/login');
        });
    });

    describe('provideDdrWithCredentialsPattern', () => {
        it('should provide with-credentials pattern', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrWithCredentialsPattern(/api\/.*/)]
            });
            const pattern = TestBed.inject(DDR_WITH_CREDENTIALS_PATTERN);
            expect(pattern).toEqual(/api\/.*/);
        });

        it('should use default with-credentials pattern', () => {
            TestBed.configureTestingModule({
                providers: [provideDdrWithCredentialsPattern()]
            });
            const pattern = TestBed.inject(DDR_WITH_CREDENTIALS_PATTERN);
            expect(pattern).toEqual(/.*/);
        });
    });
});
