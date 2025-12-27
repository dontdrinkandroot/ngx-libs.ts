export abstract class Storage
{
    public abstract store<T>(key: string, value: T): void;

    public abstract retrieve<T>(key: string, defaultValue?: T): T | null;

    public abstract remove(key: string): void;
}
