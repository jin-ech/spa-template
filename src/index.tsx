/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:06:04
 * @FilePath: \spa-template\src\index.tsx
 * @Description: 程序入口
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/i18next';

const dom = document.querySelector('#root');
const root = createRoot(dom);

root.render(<App />);

// Webpack Hot Module Replacement API
if (module?.hot) {
    module?.hot.accept();
}