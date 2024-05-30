/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:13:27
 * @FilePath: \spa-template\src\layout\layout-header\index.tsx
 * @Description: 基础布局-头部
 */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Avatar, Dropdown, Form, Layout, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './index.module.less';
import { useStore } from '@/store/jcstore';
import context from '@/store';
import { lngs, locale } from '@/i18next';
import { renderFormItem } from '@/utils';

const { Header } = Layout;

const lngOptions = Object.keys(lngs).map(key => lngs[key]);

const LayoutHeader = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const [store] = useStore(context);

    const { i18n } = useTranslation();
    const [form] = Form.useForm();


    const language = Form.useWatch('language', form);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language)
    }, [language]);


    return (
        <Header className={styles.container}>
            <div className={styles.left} onClick={() => history.push('/')}>{t('apptitle')}</div>
            <div className={styles.right}>
                {/* <div className={styles.logo}></div> */}
                <Form form={form}>
                    {renderFormItem({
                        name: 'language',
                        style: { margin: 0 },
                        initialValue: localStorage.getItem('language') ?? locale.i18n,
                        component: (
                            <Select
                                style={{ width: 88 }}
                                size='normal'
                                variant='borderless'
                                defaultActiveFirstOption
                                options={lngOptions}
                                fieldNames={{ label: 'nativeName', value: 'i18n' }}
                                onChange={() => window.location.reload()}
                            ></Select>
                        )
                    })}
                </Form>
                <Dropdown
                    menu={{
                        items: [
                            {
                                label: store?.username || 'admin',
                                icon: <UserOutlined />,
                                style: { cursor: 'default' }
                            },
                        ]
                    }}
                >
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    );
};

export default LayoutHeader;
