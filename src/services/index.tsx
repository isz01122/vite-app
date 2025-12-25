import { createContext, type PropsWithChildren, useContext, useMemo } from 'react';
import { HttpService, type IHttpService } from './httpService.tsx';

interface ServiceContextValue {
    httpService: IHttpService;
}

const ServiceContext = createContext<ServiceContextValue | null>(null);

export function ServiceProvider({ children }: PropsWithChildren) {
    // 인스턴스 고정 (재렌더 시 새로 안 만들어지게)
    const httpService = useMemo(() => new HttpService(), []);

    return <ServiceContext.Provider value={{ httpService }}>{children}</ServiceContext.Provider>;
}

export function useService(): ServiceContextValue {
    const context = useContext(ServiceContext);

    if (!context) {
        throw new Error('useService must be used within ServiceProvider');
    }

    return context;
}
