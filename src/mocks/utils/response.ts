import { HttpResponse } from 'msw';
import type { IResponse } from '@models';

export const success = <T>(data: T) => {
    return HttpResponse.json<IResponse<T>>({
        code: 'common.success.00001',
        status: 200,
        message: '성공',
        data,
    });
};

export const error = () => {
    return HttpResponse.json<IResponse<null>>({
        code: 'common.error.00001',
        status: 500,
        message: '에러',
        data: null,
    });
};
