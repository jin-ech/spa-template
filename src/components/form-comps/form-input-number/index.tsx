/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-25 11:26:42
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-10-08 10:47:19
 * @FilePath: \spa-template\src\components\form-comps\form-input-number\index.tsx
 * @Description: 数字输入框
 */

import React from 'react';
import cls from 'classnames';
import { InputNumber, InputNumberProps } from 'antd';

import styles from './index.module.less';

interface FormInputNumberProps extends InputNumberProps {
    suffix?: String;
    prefix?: String
}

const FormInputNumber: React.FC<FormInputNumberProps> = ({ className, prefix, suffix, ...props }) => {
    const prefixcls = cls(styles.container, className);

    return (
        <div className={styles.wrapper}>
            {prefix && (
                <div className={styles.prefix}>{prefix}</div>
            )}
            <InputNumber className={prefixcls} {...props} />
            {suffix && (
                <div className={styles.suffix}>{suffix}</div>
            )}
        </div>
    );
};

export default FormInputNumber;