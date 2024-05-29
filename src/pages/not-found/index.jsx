/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 16:30:12
 * @LastEditors: JC 13478707150@163.com
 * @LastEditTime: 2023-05-22 10:10:16
 * @FilePath: \spa-template\src\pages\notFound\index.tsx
 * @Description: 404页面
 */

import React from 'react';
import { useHistory } from 'react-router';

import { Result, Button } from 'antd';

import styles from './index.module.less';

const NotFound = () => {
    const history = useHistory();

    return (
        <Result
            className={styles.container}
            status='404'
            title='404 NotFound'
            subTitle="当前页面不存在"
            extra={<Button type="primary" onClick={() => history.push('/')}>返回首页</Button>}
        />
    );
};

export default NotFound;