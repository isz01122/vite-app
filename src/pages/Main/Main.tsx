import { useEffect } from 'react';
import { useService } from '@services';

const Main = () => {
    const { httpService } = useService();

    useEffect(() => {
        (async () => {
            try {
                const res = await httpService.get('/orders/records');
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return <div>hello</div>;
};

export default Main;
