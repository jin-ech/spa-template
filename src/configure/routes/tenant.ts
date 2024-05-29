/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-18 11:47:18
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 11:44:12
 * @FilePath: \spa-template\src\configure\routes\tenant.ts
 * @Description: 租户管理
 */

import React from 'react';
import { RouterItem } from './interface';

const tenantRoutes: RouterItem[] = [
    {
        key: '/tenant/account-manage',
        path: '/tenant/account-manage',
        component: React.lazy(() => import('@/pages/account-manage'))
    },
    {
        key: '/tenant/room-manage',
        path: '/tenant/room-manage',
        component: React.lazy(() => import('@/pages/room-manage'))
    }
];

export default tenantRoutes;
