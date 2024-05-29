/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2023-08-18 14:58:13
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 14:54:55
 * @FilePath: \spa-template\src\pages\account-manage\index.jsx
 * @Description: 账户管理
 */

import React from 'react';

import Header from './components/header';
import BackArea from '@/components/backArea';
import Toolbar from './components/toolbar';
import List from './components/list';

import useRequestList from '@/hooks/useRequestList';
import { mockRequest } from '@/utils';

import styles from './index.module.less';

const AccountManage = () => {
    const { data, loading, getDataTask, filterParams } = useRequestList({ action: () => mockRequest(() => null, 1000), initFilterParams: {
        p: 1,
        page_size: 10
    } });

    return (
        <div className={styles.container}>
            <BackArea title='账户管理' />
            <Header
                className={styles.header}
                onUploadOk={getDataTask}
            />
            <Toolbar
                className={styles.toolbar}
                loading={loading}
                onSearch={values => getDataTask(values)}
            />
            <List
                className={styles.list}
                dataSource={data?.data?.list}
                pageNo={data?.data?.p}
                pageSize={data?.data?.page_size}
                total={data?.data?.count}
                loading={loading}
                onChange={values => getDataTask(values)}
                onDel={getDataTask}
                filterParams={filterParams}
            />
        </div>
    );
};

export default AccountManage;