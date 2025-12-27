import {Storage} from './storage';
import {inject, Injectable} from '@angular/core';
import {DDR_STORAGE_PREFIX} from '../tokens';
import {Logger} from "../logger/logger";

@Injectable()
export class LocalStorageStorage extends Storage
{
    protected storagePrefix = inject(DDR_STORAGE_PREFIX);
    protected logger = inject(Logger);

    /**
     * @override
     */
    public retrieve<T>(key: string, defaultValue: T | null = null): T | null
    {
        const fullKey = this.getFullKey(key);
        const valueJson = localStorage.getItem(fullKey);
        if (null == valueJson) {
            return defaultValue;
        }

        try {
            return JSON.parse(valueJson);
        } catch (e) {
            this.logger.warn('Could not parse json value', valueJson, e);
            localStorage.removeItem(fullKey);
            return null;
        }
    }

    /**
     * @override
     */
    public store<T>(key: string, value: T): void
    {
        localStorage.setItem(this.getFullKey(key), JSON.stringify(value));
    }

    /**
     * @override
     */
    public remove(key: string)
    {
        localStorage.removeItem(this.getFullKey(key));
    }

    protected getFullKey(key: string): string
    {
        return this.storagePrefix + '.' + key;
    }
}
