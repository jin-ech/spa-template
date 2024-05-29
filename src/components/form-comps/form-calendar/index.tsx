/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2024-01-12 17:25:40
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-12 17:29:23
 * @FilePath: \spa-template\src\components\form-comps\form-calendar\index.tsx
 * @Description: 日历
 */

import React from 'react';
import cls from 'classnames';

import { Calendar, CalendarProps } from 'antd';

import styles from './index.module.less';

interface FormCalendarProps extends CalendarProps<any> {
}

const FormCalendar: React.FC<FormCalendarProps> = ({
    className,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return <Calendar className={prefix} {...props} />;
};

export default FormCalendar;