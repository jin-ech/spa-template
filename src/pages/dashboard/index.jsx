/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-02 11:41:54
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 16:11:50
 * @FilePath: \spa-template\src\pages\app\app-detail\index.tsx
 * @Description: 应用详情
 */

import React from 'react';

import { Button } from 'antd';


import styles from './index.module.less';
// import i18n from '@/i18next';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { i18n } = useTranslation();

    const handleClick = () => {
        i18n.changeLanguage(i18n?.language === 'zhCN' ? 'enUS' : 'zhCN');
    };

    return (
        <div className={styles.container}>
            <Button onClick={handleClick}>change language</Button>
        </div>
    );
};

export default Dashboard;
