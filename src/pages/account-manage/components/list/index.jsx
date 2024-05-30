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
import { getColumns } from './columns';

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