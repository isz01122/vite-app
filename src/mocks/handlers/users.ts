import { http } from 'msw';
import { success } from '../utils/response';

export const usersHandlers = [
    http.get('/api/users', () => {
        return success([
            { id: 1, name: 'Dori' },
            { id: 2, name: 'Alice' },
        ]);
    }),
];
