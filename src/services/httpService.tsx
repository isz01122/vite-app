import type { IResponse } from '@models';

export interface IHttpService {
    get<T>(url: string): Promise<IResponse<T>>;
    post<T>(url: string, body?: unknown): Promise<IResponse<T>>;
}

export class HttpService implements IHttpService {
    API_BASE = import.meta.env.VITE_PB_API_BASE;

    async get<T>(url: string): Promise<IResponse<T>> {
        const res = await fetch(`${this.API_BASE}${url}`);

        const data = await res.json();

        if (!res.ok) {
            throw data;
        }

        return data;
    }

    async post<T>(url: string, body?: unknown): Promise<IResponse<T>> {
        const res = await fetch(`${this.API_BASE}${url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) {
            throw data;
        }

        return data;
    }
}
