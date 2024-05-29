/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-05-29 11:42:58
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 11:46:42
 * @FilePath: \spa-template\src\App.tsx
 * @Description: 入口文件
 */

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import PrimaryLayout from './layout/primary-layout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCN18n from './local/zh_CN';

import './App.less';

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
