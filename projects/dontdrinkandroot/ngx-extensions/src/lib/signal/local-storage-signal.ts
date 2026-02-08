import {effect, signal, WritableSignal} from '@angular/core';

export function localStorageSignal<T>(key: string, defaultValue: T): WritableSignal<T>
{
    const storedValue = localStorage.getItem(key);
    const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;

    const s = signal<T>(initialValue);

    effect(() => {
        localStorage.setItem(key, JSON.stringify(s()));
    });

    return s;
}
