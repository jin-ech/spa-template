
import { useMemo } from 'react';
import { useLocation } from 'react-router';

const useSearchParams = () => {
    const location = useLocation();

    const params = useMemo(() => {
        const [_, str] = location.search?.split('?');
        const args = str?.split('&');
        return args?.reduce((res, item) => {
            const [key, value] = item.split('=');
            res[key] = value;
            return res;
        }, {});
    }, [location]);

    return params;
};

export default useSearchParams;