/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-29 15:14:53
 * @FilePath: \lynkros-manage\src\layout\layout-sider\index.tsx
 * @Description: 基础布局-侧边栏
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { matchRoutes } from 'react-router-config';

import { Layout, Menu } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import layoutItems from '@/configure/layout';
import type { LayoutSiderItem } from '@/configure/layout';
import routes from '@/configure/routes';
import { findTreePath, getMenuItems } from './util';

import styles from './index.module.less';

const { Sider } = Layout;

const LayoutSider: React.FC = () => {
    const history = useHistory();
    const [collapsed, updateCollapsed] = useState(false);

    const [selectedKeys, updateSelectedKeys] = useState(['/dashboard']);
    const cacheOpenKeys = useRef([]);
    const [openKeys, updateOpenKeys] = useState([]);
    const pathname = history.location.pathname;
    const match = useRouteMatch();

    /**
     * @description: 点击菜单
     * @param {LayoutSiderItem} item
     * @return {*}
     */
    const handleMenuItemClick = (item: LayoutSiderItem) => {
        if (!item.path) {
            return;
        }
        const path = item.path;
        updateSelectedKeys([path]);
        history.push(path);
    };

    /**
     * @description: 点击submenu标题
     * @param {object} item
     * @return {*}
     */
    const handleTitleClick = (item: { key: string }) => {
        const _openKeys = openKeys.includes(item.key)
            ? openKeys.filter(key => key !== item.key)
            : [...openKeys, item.key];
        updateOpenKeys(_openKeys);
    };

    /**
     * @description: 路由变更更新菜单选中项
     * @return {*}
     */
    React.useEffect(() => {
        if (layoutItems.length === 0) {
            return;
        }
        const res = matchRoutes(routes, pathname);
        const { key } = res?.[0]?.route || {};
        const $openKeys = findTreePath(layoutItems, (item: LayoutSiderItem) => item.key === (key as string));
        updateOpenKeys([...openKeys, ...($openKeys || [])]);
        updateSelectedKeys([key as string]);
    }, [match, layoutItems]);

    // 格式化菜单项数据
    const menuItems = React.useMemo(() => {
        return getMenuItems(layoutItems, handleMenuItemClick, handleTitleClick);
    }, [layoutItems, openKeys]);

    useEffect(() => {
        if (!collapsed) {
            setTimeout(() => {
                updateOpenKeys(cacheOpenKeys.current);
            }, 0);
            return;
        }
        cacheOpenKeys.current = openKeys;
        updateOpenKeys([]);
    }, [collapsed]);

    return (
        <Sider
            width={240}
            trigger={null}
            collapsed={collapsed}
            className={styles.container}
        >
            <Menu
                theme='light'
                mode='inline'
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                items={menuItems}
                className={styles.menu}
            />
            <div className={styles.footer} onClick={() => updateCollapsed(!collapsed)}>
                {collapsed ? <RightOutlined /> : <LeftOutlined />}
            </div>
        </Sider>
    );
};

export default LayoutSider;
