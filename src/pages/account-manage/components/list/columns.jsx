
import React from 'react';

import i18n from '@/i18next';

export const getColumns = () => ([
    {
        title: i18n.t('page.accountManage.table.index'),
        fixed: 'left',
        width: 80,
        align: 'center',
        render: (_, _r, index) => index + 1
    },
    {
        title: i18n.t('page.accountManage.table.id'),
        width: 120,
        fixed: 'left',
        dataIndex: 'id'
    },
    {
        title: i18n.t('page.accountManage.table.account'),
        fixed: 'left',
        width: 120,
        dataIndex: 'merchant_code'
    },
    {
        title: i18n.t('page.accountManage.table.agreement'),
        dataIndex: 'agreement_num'
    },
    {
        title: i18n.t('page.accountManage.table.zuhu'),
        dataIndex: 'hire_name'
    },
    {
        title: i18n.t('page.accountManage.table.tel'),
        dataIndex: 'hire_mobile1'
    },
    {
        title: i18n.t('page.accountManage.table.accountStatus'),
        dataIndex: 'account_status'
    },
]);