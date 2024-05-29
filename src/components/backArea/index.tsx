/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-07-18 14:40:28
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-08-31 10:50:28
 * @FilePath: \spa-template\src\components\BackArea\index.tsx
 * @Description: 返回
 */

import React from 'react';
import cls from 'classnames';
import { useHistory } from 'react-router';
import { LeftOutlined } from '@ant-design/icons';

import styles from './index.module.less';

interface BackAreaProps {
    className?: string;
    backUrl?: string;
    backText?: string;
    title?: string;
    withLine?: boolean;
    children?: React.ReactNode;
    renderRight?: () => React.ReactNode;
}

const BackArea: React.FC<BackAreaProps> = ({
    className,
    backUrl,
    backText,
    title,
    withLine = false,
    children,
    renderRight
}) => {
    const prefix = cls(styles.container, className, { [styles.withline]: withLine });
    const history = useHistory();
    return (
        <div className={prefix}>
            {backUrl && (
                <a onClick={() => (backUrl ? history.push(backUrl) : history.goBack())}>
                    <LeftOutlined />
                    &nbsp;
                    {backText || '返回'}
                </a>
            )}
            <div className={cls(styles.center, { [styles['with-back']]: !!backUrl })}>
                <div className={styles.header}>
                    {title}
                </div>
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

export default BackArea;
