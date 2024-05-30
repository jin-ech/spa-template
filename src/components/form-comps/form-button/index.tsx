/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-25 10:30:49
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:51:10
 * @FilePath: \spa-template\src\components\form-comps\form-button\index.tsx
 * @Description: 按钮控件
 */

import React from 'react';
import cls from 'classnames';

import { Button, ButtonProps } from 'antd';

import styles from './index.module.less';

interface FormButtonProps extends ButtonProps {
}

const FormButton: React.FC<FormButtonProps> = ({
    className,
    value,
    children,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return (
        <Button
            className={prefix}
            {...props}
        >
            {children}
        </Button>
    );
};

export default FormButton;