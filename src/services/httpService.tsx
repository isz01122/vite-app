import type { IResponse } from '@models';

export interface IHttpService {
    get<T>(url: string): Promise<IResponse<T>>;
    post<T>(url: string, body?: unknown): Promise<IResponse<T>>;
}

export class HttpService implements IHttpService {
    async get<T>(url: string): Promise<IResponse<T>> {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Network error');
        }

        return res.json();
    }

    async post<T>(url: string, body?: unknown): Promise<IResponse<T>> {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            throw new Error('Network error');
        }

        return res.json();
    }
}
