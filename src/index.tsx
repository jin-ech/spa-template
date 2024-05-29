/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-05-30 16:23:47
 * @FilePath: \spa-template\src\index.tsx
 * @Description: 程序入口
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const dom = document.querySelector('#root');
const root = createRoot(dom);

root.render((
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
));

// Webpack Hot Module Replacement API
if (module?.hot) {
    module?.hot.accept();
}