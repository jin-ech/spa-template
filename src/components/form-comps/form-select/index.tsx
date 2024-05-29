/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:27:02
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-30 10:11:28
 * @FilePath: \spa-template\src\components\form-comps\form-select\index.tsx
 * @Description: 选择框
 */

import React from 'react';
import cls from 'classnames';
import { Select, SelectProps } from 'antd';

import styles from './index.module.less';

interface FormSelectProps extends SelectProps {
}

const FormSelect: React.FC<FormSelectProps> = ({ className, showSearch, ...props }) => {
    const prefix = cls(styles.container, className);

    return (
        <Select
            className={prefix}
            {...(showSearch ? ({
                showSearch: true,
                filterOption: (val, item) => (item.label as string)?.includes(val)
            }) : {})}
            {...props}
        />
    );
};

export default FormSelect;