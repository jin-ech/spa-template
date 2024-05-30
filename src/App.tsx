/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-05-29 11:42:58
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 16:05:54
 * @FilePath: \spa-template\src\App.tsx
 * @Description: 入口文件
 */

import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import PrimaryLayout from './layout/primary-layout';
import { Provider } from 'react-redux';
import store from '@/store';

import { tokenColors } from '@/style/tokenVariables';

import { locale } from './i18next';

import './App.less';

function App() {

    return (
        <HashRouter>
            <Provider store={store as any}>
                <ConfigProvider locale={locale.antd} theme={{ token: tokenColors }}>
                    <PrimaryLayout />
                </ConfigProvider>
            </Provider>
        </HashRouter>
    );
}

export default App;
