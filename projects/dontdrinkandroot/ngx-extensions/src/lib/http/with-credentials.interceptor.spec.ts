import {TestBed} from '@angular/core/testing';
import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {withCredentialsInterceptor} from './with-credentials.interceptor';
import {provideDdrWithCredentialsPattern} from '../providers';
import {afterEach, beforeEach, describe, expect, it} from 'vitest';

describe('withCredentialsInterceptor', () => {
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(withInterceptors([withCredentialsInterceptor])),
                provideHttpClientTesting()
            ]
        });
        httpMock = TestBed.inject(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should add withCredentials when no pattern is provided (default behavior)', () => {
        httpClient.get('/api/test').subscribe();
        const req = httpMock.expectOne('/api/test');
        expect(req.request.withCredentials).toBe(true);
    });

    it('should add withCredentials when pattern matches', () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(withInterceptors([withCredentialsInterceptor])),
                provideHttpClientTesting(),
                provideDdrWithCredentialsPattern(/\/api\/.*/)
            ]
        });
        httpMock = TestBed.inject(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);

        httpClient.get('/api/test').subscribe();
        const req = httpMock.expectOne('/api/test');
        expect(req.request.withCredentials).toBe(true);
    });

    it('should NOT add withCredentials when pattern does not match', () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(withInterceptors([withCredentialsInterceptor])),
                provideHttpClientTesting(),
                provideDdrWithCredentialsPattern(/\/api\/.*/)
            ]
        });
        httpMock = TestBed.inject(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);

        httpClient.get('/other/test').subscribe();
        const req = httpMock.expectOne('/other/test');
        expect(req.request.withCredentials).toBe(false);
    });
});
