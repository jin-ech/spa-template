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
import i18n from '@/i18next';

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
                <div className={styles.label}>
                    {i18n.t('page.accountManage.header.createAccountLable')}
                </div>
                <div className={styles.content}>
                    <Button type='primary' onClick={onCreateAccount}>
                        {i18n.t('page.accountManage.header.button.createAccount')}
                    </Button>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.label}>
                    {i18n.t('page.accountManage.header.batchCreateAccountLabel')}
                </div>
                <div className={styles.content}>
                    <Button
                        type='primary'
                        icon={<DownloadOutlined />}
                        onClick={handleTemplatDownload}
                        >
                        {i18n.t('page.accountManage.header.button.templateDownload')}
                    </Button>
                    <FormUpload.Button
                        bnText={i18n.t('page.accountManage.header.button.uploadFile')}
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