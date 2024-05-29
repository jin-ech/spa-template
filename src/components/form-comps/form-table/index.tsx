/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:27:02
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-09-06 17:58:06
 * @FilePath: \spa-template\src\components\form-comps\form-table\index.tsx
 * @Description: 选择框
 */

import React from 'react';
import cls from 'classnames';
import { Table, TableProps } from 'antd';

import styles from './index.module.less';

interface FormTableProps extends TableProps<any> {
    width?: number;
}

const FormTable: React.FC<FormTableProps> = ({
    className,
    columns: columnsProps,
    width,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    const columns = columnsProps.map(item => ({
        render: (val: any) => val || '-',
        ...(width ? { width } : { width: 120 }),
        ...item
    }));

    // @ts-ignore
    return <Table className={prefix} columns={columns} bordered {...props} />;
};

export default FormTable;