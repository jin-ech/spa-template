

import React from 'react';
import cls from 'classnames';

import Title, { TitleProps } from './title';

import styles from './index.module.less';

interface CardProps {
    title?: string;
    titleRight?: React.ReactElement;
    className?: string;
    children?: React.ReactNode
}

const Card: React.FC<CardProps> & { Title: React.FC<TitleProps> } = ({
    title,
    titleRight,
    className,
    children
}) => {
    const prefix = cls(styles.container, className);
    return (
        <div className={prefix}>
            <div className={styles.header}>
                {title && <Title>{title}</Title>}
                <div className={styles.right}>
                    {titleRight}
                </div>
            </div>
            {children}
        </div>
    );
};

Card.Title = Title;

export default Card;