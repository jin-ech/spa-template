/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:09:46
 * @FilePath: \spa-template\src\layout\primary-layout\index.tsx
 * @Description: 基础布局
 */

import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';

import { Form, Layout } from 'antd';

import LayoutHeader from '../layout-header';
import LayoutSider from '../layout-sider';
import LayoutMain from '../layout-main';

import { blackList } from '@/configure/routes';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './index.module.less';
import { useTranslation } from 'react-i18next';

const PrimaryLayout = () => {
    const match = useRouteMatch();
    const { getUserInfoTask } = useUserInfo();
  
    useEffect(() => {
        if (blackList.includes(window.location.pathname)) {
            return;
        }
        getUserInfoTask({});
    }, [match]);

    return (
        <div className={styles.container}>
            <Layout className={styles.wrapper}>
                <LayoutHeader />
                <Layout>
                    <LayoutSider />
                    <LayoutMain />
                </Layout>
            </Layout>
        </div>
    );
};

export default PrimaryLayout;
