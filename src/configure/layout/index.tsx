/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:44:34
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 11:42:41
 * @FilePath: \spa-template\src\configure\layout\index.js
 * @Description: 主菜单配置
 */

import React from 'react';

import { MenuItemType, SubMenuType, MenuItemGroupType, MenuDividerType } from 'antd/lib/menu/hooks/useItems';

export type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType;

export type LayoutSiderItem = ItemType & {
    beforeRender?: (user: any) => boolean;
    path?: string;
    children?: Array<LayoutSiderItem>;
    keyPath?: string[];
};

const layoutConfig: LayoutSiderItem[] = [
    {
        key: '/dashboard',
        path: '/dashboard',
        label: '首页',
        icon: ''
    },
    {
        key: '/tenant',
        label: '租户管理',
        icon: '',
        children: [
            {
                key: '/tenant/account-manage',
                path: '/tenant/account-manage',
                label: '账户管理'
            },
            {
                key: '/tenant/room-manage',
                path: '/tenant/room-manage',
                label: '房间管理'
            }
        ]
    }
];

export default layoutConfig;
