/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:21:31
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:33:33
 * @FilePath: \spa-template\src\pages\account-manage\components\toolbar\index.jsx
 * @Description: 工具栏
 */

import React, { useMemo, useTransition } from 'react';
import cls from 'classnames';
import moment from 'moment';

import { Button, Form } from 'antd';
import { FormDatePicker, FormInput, FormSelect } from '@/components/form-comps';
import { renderFormItems, transformObjectToArr } from '@/utils';

import { SearchOutlined } from '@ant-design/icons';
import { AccountStatusEnum } from '@/constants';

import styles from './index.module.less';
import { useTranslation } from 'react-i18next';

const Toolbar = ({ className, loading, onSearch }) => {
    const prefix = cls(styles.container, className);
    const [form] = Form.useForm();
    const { t } = useTranslation();

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
            label: t('page.accountManage.toolbar.accountStatus'),
            component: <FormSelect
                className={styles.control}
                options={transformObjectToArr(AccountStatusEnum)}
                allowClear
            />
        },
        {
            name: 'rangeDate',
            label: t('page.accountManage.toolbar.addTime'),
            component: <FormDatePicker.RangePicker style={{ width: 320 }} />
        },
        {
            component: (
                <Button
                    type='primary'
                    style={{ marginLeft: 24 }}
                    loading={loading}
                    onClick={handleSearch}
                    icon={<SearchOutlined />}
                >{t('button.search')}</Button>
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