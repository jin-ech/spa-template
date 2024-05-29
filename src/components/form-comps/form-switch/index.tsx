/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-09-04 15:34:36
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-09-04 15:36:00
 * @FilePath: \spa-template\src\components\form-comps\form-switch\index.tsx
 * @Description: 切换控件
 */

import React from 'react';
import cls from 'classnames';
import { Switch, SwitchProps } from 'antd';

import styles from './index.module.less';

interface FormSwitchProps extends SwitchProps {
}

const FormSwitch: React.FC<FormSwitchProps> = ({ className, ...props }) => {
    const prefix = cls(styles.container, className);

    return (
        <div className={styles.wrapper}>
            <Switch className={prefix} {...props} />
        </div>
    );
};

export default FormSwitch;