export interface IResponse<T> {
    code: string;
    status: number;
    message: string;
    data: T;
}
