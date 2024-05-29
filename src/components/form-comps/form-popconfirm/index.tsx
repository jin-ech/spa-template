/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:27:02
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-08-25 15:09:39
 * @FilePath: \spa-template\src\components\form-comps\form-input\index.tsx
 * @Description: 选择框
 */

import React from 'react';
import cls from 'classnames';
import { Popconfirm, PopconfirmProps } from 'antd';

import styles from './index.module.less';

interface FormPopconfirmProps extends PopconfirmProps {
}

const FormPopconfirm: React.FC<FormPopconfirmProps> = ({
    className,
    children,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return (
        <Popconfirm
            className={prefix}
            {...props}
        >
            {children}
        </Popconfirm>
    );
};

export default FormPopconfirm;