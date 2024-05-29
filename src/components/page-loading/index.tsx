/*
 * @Author: jinech
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-06-06 17:01:36
 * @FilePath: \spa-template\src\components\loading\index.tsx
 * @Description: 页面加载
 */

import React from 'react';
import { Spin } from 'antd';

import styles from './index.module.less';

const PageLoading: React.FC<any> = props => (
    <Spin size='large'>
        <div className={styles.loading} {...props}></div>
    </Spin>
);

export default PageLoading;