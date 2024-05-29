/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-25 10:30:49
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-23 16:59:42
 * @FilePath: \spa-template\src\components\form-comps\form-button\index.tsx
 * @Description: 按钮控件
 */

import React from 'react';
import cls from 'classnames';

import { Button, ButtonProps } from 'antd';
import AuthButton from './auth-button';

import styles from './index.module.less';

interface FormButtonProps extends ButtonProps {
}

const FormButton: React.FC<FormButtonProps> & { AuthButton: typeof AuthButton } = ({
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

FormButton.AuthButton = AuthButton;

export default FormButton;