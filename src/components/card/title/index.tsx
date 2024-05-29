/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-23 15:46:13
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-10-08 10:27:12
 * @FilePath: \spa-template\src\components\card\title\index.tsx
 * @Description: 卡片标题
 */

import React from 'react';
import cls from 'classnames';

import styles from './index.module.less';

export interface TitleProps {
    className?: string;
    children: React.ReactNode;
    renderRight?: () => React.ReactNode;
};

const Title: React.FC<TitleProps> = ({
    className,
    children,
    renderRight,
    ...props
}) => {
    const prefix = cls(styles.container, className);
    return (
        <div className={prefix} {...props}>
            <div className={styles.title}>
                {children}
            </div>
            {renderRight && (
                <div className={styles.right}>
                    {renderRight()}
                </div>
            )}
        </div>
    );
};

export default Title;