/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-24 15:15:19
 * @FilePath: \spa-template\src\configure\routes\index.js
 * @Description: 路由配置导出
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

import { RouterItem } from './interface';

import tenantRoutes from './tenant';

const routes: RouterItem[] = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to='/dashboard' />
    },
    {
        key: '/dashboard',
        path: '/dashboard',
        exact: true,
        component: React.lazy(() => import('@/pages/dashboard'))
    },
    ...tenantRoutes,
    {
        path: '*',
        component: React.lazy(() => import('@/pages/not-found'))
    }
];

export const blackList = ['/login', '/register'];
export default routes;
