import { HttpResponse } from 'msw';

export interface ApiResponse<T> {
    code: string;
    status: number;
    message: string;
    data: T;
}

export const success = <T>(data: T, message = '성공', status = 200) => {
    return HttpResponse.json<ApiResponse<T>>({
        code: 'common.success.00001',
        status,
        message,
        data,
    });
};

export const error = (code: string, message: string, status = 500) => {
    return HttpResponse.json<ApiResponse<null>>(
        {
            code,
            status,
            message,
            data: null,
        },
        { status },
    );
};
