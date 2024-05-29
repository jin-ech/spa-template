/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-25 09:28:16
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-08-25 10:17:29
 * @FilePath: \spa-template\src\components\form-comps\form-timep-icker\index.tsx
 * @Description: 时间选择器
 */

import React, { useMemo } from 'react';
import cls from 'classnames';
import moment from 'moment';

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