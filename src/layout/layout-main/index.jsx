/*
 * @Author: jinech
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:00:34
 * @FilePath: \spa-template\src\layout\layout-main\index.tsx
 * @Description: 基础布局-主体部分
 */

import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { Layout } from 'antd';
import PageLoading from '@/components/page-loading';

import routes from '@/configure/routes';

import styles from './index.module.less';

const { Content } = Layout;

const LayoutMain = () => {
    return (
        <Content className={styles.container}>
            <Switch>
                <Suspense fallback={<PageLoading />}>
                    {renderRoutes(routes)}
                </Suspense>
            </Switch>
        </Content>
    );
};

export default LayoutMain;