/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-20 15:37:17
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-21 10:08:28
 * @FilePath: \business-register-web\src\components\form-comps\form-datepicker\index.tsx
 * @Description: 时间控件
 */

import React, { useMemo } from 'react';
import cls from 'classnames';

import { DatePicker } from 'antd';

import styles from './index.module.less';
import { PickerDateProps /* PickerBaseProps */ /* PickerTimeProps */ } from 'antd/lib/date-picker/generatePicker';
import moment, { Moment } from 'moment';

// PickerBaseProps<Moment> | PickerDateProps<Moment> | PickerTimeProps<Moment>
type FormRangePickerComp = typeof DatePicker.RangePicker;

interface FormDatePickerProps extends PickerDateProps<Moment> {
}

const FormDatePicker: React.FC<FormDatePickerProps> & {RangePicker: FormRangePickerComp} = ({
    className,
    value,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    const $value = useMemo(() => {
        if (!value) {
            return null;
        }
        if (moment.isMoment(value)) {
            return value;
        }
        return moment(value);
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