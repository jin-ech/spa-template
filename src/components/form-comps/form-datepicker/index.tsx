/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-20 15:37:17
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-29 17:53:55
 * @FilePath: \business-register-web\src\components\form-comps\form-datepicker\index.tsx
 * @Description: 时间控件
 */

import React, { useMemo } from 'react';
import cls from 'classnames';

import { DatePicker } from 'antd';

import { DatePickerProps } from 'antd/lib';
import dayjs, { Dayjs } from 'dayjs';

import styles from './index.module.less';

type FormRangePickerComp = typeof DatePicker.RangePicker;

interface FormDatePickerProps extends DatePickerProps<Dayjs> {
}

const FormDatePicker: React.FC<FormDatePickerProps> & { RangePicker: FormRangePickerComp } = ({
    className,
    value,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    const $value = useMemo(() => {
        if (!value) {
            return null;
        }
        if (dayjs.isDayjs(value)) {
            return value;
        }
        return dayjs(value);
    }, [value]);

    return (
        <DatePicker
            className={prefix}
            suffixIcon={false}
            value={$value}
            getPopupContainer={el => el}
            {...props}
        />
    );
};

FormDatePicker.RangePicker = DatePicker.RangePicker;

export default FormDatePicker;