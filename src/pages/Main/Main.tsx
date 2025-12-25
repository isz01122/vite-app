import { useEffect } from 'react';
import { useService } from '@services';

const Main = () => {
    const { httpService } = useService();

    useEffect(() => {
        (async () => {
            const res = await httpService.get('/api/users');

            if (res.status !== 200) {
                return;
            }

            console.log(res.data);
        })();
    }, []);

    return <div>hello</div>;
};

export default Main;
