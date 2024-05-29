/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-06-07 15:30:06
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-21 12:00:35
 * @FilePath: \spa-template\src\components\form-comps\form-label\index.tsx
 * @Description: 表单文案
 */

import React, { useMemo } from 'react';
import moment from 'moment';
import cls from 'classnames';

import styles from './index.module.less';

interface TimeProps { value?: string; format: string; }
const Time: React.FC<TimeProps> = ({ value, format }) => {

    const $value = useMemo(() => (value ? moment(value).format(format) : ''), [value]);

    return (
        <div className={styles.container}>
            {$value}
        </div>
    );
};

interface FormLabelProps {
    unit?: string;
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    placeholder?: string;
    render?: (val: any) => string;
    prefix?: string;
    suffix?: string;
}
const FormLabel: React.FC<FormLabelProps> & { Time: React.FC<TimeProps> } = ({
    unit,
    className,
    value,
    placeholder = '-',
    render,
    prefix,
    suffix,
    ...props
}) => {
    const $prefix = cls(styles.container, className);

    const renderLabel = () => {
        if (!value) {
            return placeholder;
        }
        if (render) {
            return render(value);
        }
        if (unit) {
            return `${value} ${unit}`;
        }
        return value;
    };

    return (
        <div className={$prefix} {...props}>
            {prefix}&nbsp;
            {renderLabel()}
            &nbsp;{suffix}
        </div>
    );
};

FormLabel.Time = Time;

export default FormLabel;