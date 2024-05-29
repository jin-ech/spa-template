/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:21:31
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-03-13 14:53:57
 * @FilePath: \spa-template\src\pages\account-manage\components\toolbar\index.jsx
 * @Description: 工具栏
 */

import React, { useMemo } from 'react';
import cls from 'classnames';
import moment from 'moment';

import { Button, Form } from 'antd';
import { FormDatePicker, FormInput, FormSelect } from '@/components/form-comps';
import { renderFormItems, transformObjectToArr } from '@/utils';

import { SearchOutlined } from '@ant-design/icons';
import { AccountStatusEnum } from '@/constants';

import styles from './index.module.less';

const Toolbar = ({ className, loading, onSearch }) => {
    const prefix = cls(styles.container, className);
    const [form] = Form.useForm();

    const handleSearch = () => {
        const values = form.getFieldsValue();
        const { rangeDate, ...params } = values;
        onSearch({
            ...params,
            start: rangeDate?.[0] ? moment(rangeDate[0]).format('YYYY-MM-DD HH:mm:ss') : null,
            end: rangeDate?.[1] ? moment(rangeDate[1]).format('YYYY-MM-DD HH:mm:ss') : null,
            p: 1,
            page_size: 10
        });
    };

    const items = useMemo(() => [
        {
            name: 'account_status',
            label: '开户状态',
            component: <FormSelect
                className={styles.control}
                options={transformObjectToArr(AccountStatusEnum)}
                allowClear
            />
        },
        {
            name: 'rangeDate',
            label: '开户时间',
            component: <FormDatePicker.RangePicker style={{ width: 320 }} />
        },
        {
            name: 'keyword',
            component: <FormInput style={{ width: 320 }} placeholder='账号/合同号/租户姓名/联系电话' />
        },
        {
            component: (
                <Button
                    type='primary'
                    style={{ marginLeft: 58 }}
                    loading={loading}
                    onClick={handleSearch}
                    icon={<SearchOutlined />}
                >查询</Button>
            )
        }
    ], [loading]);

    return (
        <div className={prefix}>
            <Form form={form} layout='inline' labelCol={{ className: styles.label }}>
                {renderFormItems({ items })}
            </Form>
        </div>
    );
};

export default Toolbar;