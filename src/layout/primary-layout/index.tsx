/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-23 17:15:11
 * @FilePath: \spa-template\src\layout\primary-layout\index.tsx
 * @Description: 基础布局
 */

import React, { useMemo, useEffect } from 'react';
import { useRouteMatch } from 'react-router';

import { Layout } from 'antd';

import LayoutHeader from '../layout-header';
import LayoutSider from '../layout-sider';
import LayoutMain from '../layout-main';

import routes, { blackList } from '@/configure/routes';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './index.module.less';

const PrimaryLayout = () => {
    const match = useRouteMatch();
    const { user, getUserInfoTask } = useUserInfo();

    useEffect(() => {
        if (blackList.includes(window.location.pathname)) {
            return;
        }
        getUserInfoTask({});
    }, [match]);

    return (
        <div className={styles.container}>
            <Layout className={styles.wrapper}>
                <LayoutHeader user={user} />
                <Layout>
                    <LayoutSider />
                    <LayoutMain />
                </Layout>
            </Layout>
        </div>
    );
};

export default PrimaryLayout;
