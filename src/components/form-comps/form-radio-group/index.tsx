/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:27:02
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-08-24 11:58:22
 * @FilePath: \spa-template\src\components\form-comps\form-select\index.tsx
 * @Description: 选择框
 */

import React from 'react';
import cls from 'classnames';
import { Radio, RadioGroupProps, Select } from 'antd';

import styles from './index.module.less';

interface FormRadioGroupProps extends RadioGroupProps {
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({ className, ...props }) => {
    const prefix = cls(styles.container, className);

    return <Radio.Group className={prefix} {...props} />;
};

export default FormRadioGroup;