/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2023-08-22 17:16:36
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 14:55:30
 * @FilePath: \spa-template\src\pages\account-manage\components\header\index.jsx
 * @Description: 头部
 */

import React from 'react';
import cls from 'classnames';

import { Button } from 'antd';

import { FormUpload } from '@/components/form-comps';
import { exampleApi } from '@/request/api';

import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import notification from '@/components/notification';

import styles from './index.module.less';

const Header = ({ className, onUploadOk, onCreateAccount }) => {
    const prefix = cls(styles.container, className);

    const handleUploadOk = () => {
        notification.success('文件上传成功');
        onUploadOk();
    };

    /**
     * @description: 模板下载
     * @return {*}
     */
    const handleTemplatDownload = () => {
        const aEl = document.createElement('a');
        aEl.target = '_blank';
        aEl.href = exampleApi + `?timestamp=${+new Date()}`;
        aEl.click();
    };

    return (
        <div className={prefix}>
            <div className={styles.col}>
                <div className={styles.label}>单次开户</div>
                <div className={styles.content}>
                    <Button type='primary' onClick={onCreateAccount}>开户</Button>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.label}>批量开户</div>
                <div className={styles.content}>
                    <Button
                        type='primary'
                        icon={<DownloadOutlined />}
                        onClick={handleTemplatDownload}
                    >
                        模板下载
                    </Button>
                    <FormUpload.Button
                        bnText='文件上传'
                        accept='.xls,.xlsx'
                        url={exampleApi}
                        buttonProps={{
                            icon: <UploadOutlined />
                        }}
                        onChange={handleUploadOk}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;