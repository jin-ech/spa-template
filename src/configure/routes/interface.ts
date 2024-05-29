
import { RouteConfig } from 'react-router-config';

export interface RouterItem extends RouteConfig {
    fullScreen?: boolean;
    path: string;
    title?: string;
}