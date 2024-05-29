/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-25 09:28:16
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-29 17:58:39
 * @FilePath: \spa-template\src\components\form-comps\form-timep-icker\index.tsx
 * @Description: 时间选择器
 */

import React from 'react';
import cls from 'classnames';

import { TimePicker } from 'antd';

import styles from './index.module.less';

const FormTimerPicker = ({
    className,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return (
        <TimePicker
            className={prefix}
            suffixIcon={false}
            {...props}
        />
    );
};

FormTimerPicker.RangePicker = TimePicker.RangePicker;

export default FormTimerPicker;