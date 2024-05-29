/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2024-01-03 18:17:53
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-03 18:18:22
 * @FilePath: \spa-template\src\components\form-comps\form-tree\index.tsx
 * @Description: 树形控件
 */

import React from 'react';
import cls from 'classnames';
import { Tree, TreeProps } from 'antd';

import styles from './index.module.less';

interface FormTreeProps extends TreeProps {
}

const FormTable: React.FC<FormTreeProps> = ({
    className,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return <Tree className={prefix} {...props} />;
};

export default FormTable;