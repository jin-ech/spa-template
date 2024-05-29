/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:16:36
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-17 10:24:49
 * @FilePath: \spa-template\src\pages\account-manage\components\list\index.jsx
 * @Description: 列表
 */

import React, { useMemo } from 'react';

import { FormTable } from '@/components/form-comps';

const getColumns = () => ([
    {
        title: '序号',
        fixed: 'left',
        width: 80,
        align: 'center',
        render: (_, _r, index) => index + 1
    },
    {
        title: 'ID',
        width: 120,
        fixed: 'left',
        dataIndex: 'id'
    },
    {
        title: '账号',
        fixed: 'left',
        width: 120,
        dataIndex: 'merchant_code'
    },
    {
        title: '合同号',
        dataIndex: 'agreement_num'
    },
    {
        title: '租户姓名',
        dataIndex: 'hire_name'
    },
    {
        title: '联系电话',
        dataIndex: 'hire_mobile1'
    },
    {
        title: '账户状态',
        dataIndex: 'account_status'
    },
    {
        title: '开户(销户)时间',
        dataIndex: 'account_status',
        render: (val, record) => {
            if (val === '开户') {
                return record?.created_at;
            }
            if (val === '销户') {
                return record?.cancel_account_at;
            }
            return '-';
        }
    },
]);

const List = ({
    loading,
    dataSource = [],
    pageNo,
    pageSize,
    total,
    onChange,
}) => {

    const columns = useMemo(() => getColumns(), []);

    return (
        <FormTable
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            scroll={{ x: 'max-content' }}
            rowKey='id'
            pagination={{
                current: pageNo,
                pageSize,
                total,
                showLessItems: true,
                showQuickJumper: true,
                showSizeChanger: true,
                showTotal: val => `共${val}条`,
                onChange: (p = 1, page_size = 10) => {
                    onChange({
                        p,
                        page_size
                    });
                }
            }}
        />
    );
};

export default List;