/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-05-29 11:42:58
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-29 17:47:32
 * @FilePath: \spa-template\src\App.tsx
 * @Description: 入口文件
 */

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import { ConfigProvider } from 'antd';
import PrimaryLayout from './layout/primary-layout';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import zhCN18n from './local/zh_CN';

import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import './App.less';

dayjs.locale('zh-cn');

i18n.use(initReactI18next).init({
    resources: { zh: zhCN18n },
    lng: 'zh' // 这里是默认语言，也就是初始显示的语言类型
});

function App() {
    return (
        <ReduxProvider store={store}>
            <HashRouter>
                <ConfigProvider locale={zhCN}>
                    <PrimaryLayout />
                </ConfigProvider>
            </HashRouter>
        </ReduxProvider>
    );
}

export default App;
