/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:44:34
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:18:07
 * @FilePath: \spa-template\src\configure\layout\index.js
 * @Description: 主菜单配置
 */

import React from 'react';

import { MenuItemType, SubMenuType, MenuItemGroupType, MenuDividerType } from 'antd/es/menu/interface';
import i18n from '@/i18next';
import { HomeOutlined, GlobalOutlined } from '@ant-design/icons';

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
        label: i18n.t('menu.dashboard'),
        icon: <HomeOutlined />
    },
    {
        key: '/tenant',
        label: i18n.t('menu.tenant'),
        icon: <GlobalOutlined />,
        children: [
            {
                key: '/tenant/account-manage',
                path: '/tenant/account-manage',
                label: i18n.t('menu.accountManage')
            },
            {
                key: '/tenant/room-manage',
                path: '/tenant/room-manage',
                label: i18n.t('menu.roomManage')
            }
        ]
    }
];

export default layoutConfig;
