import { http } from 'msw';
import { success } from '@mocks/utils';

export const usersHandlers = [
    http.get('/api/users', () => {
        // 성공
        return success([
            { id: 1, name: 'Dori' },
            { id: 2, name: 'Alice' },
        ]);

        // 예러
        // return error('에러');
    }),
];
