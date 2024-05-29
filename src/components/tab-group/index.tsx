
import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import cls from 'classnames';

import styles from './index.module.less';

interface Item { value: string; label: string }

interface TabGroupProps {
    value?: string;
    onChange?: (val: string) => void;
    className?: string;
    options: Item[];
}

const TabGroup: React.FC<TabGroupProps> = ({
    className,
    value,
    onChange,
    options
}) => {
    const prefix = cls(styles.container, className);
    const [currValue, updateCurrValue] = useState(value || options?.[0]?.value);

    useEffect(() => {
        updateCurrValue(value);
        onChange(value);
    }, [value]);

    const renderItem = (item: Item) => (
        <div
            className={cls(styles.item, { [styles.selected]: item.value === currValue })}
            key={item.value}
            onClick={() => {
                onChange(item.value);
                updateCurrValue(item.value);
            }}
        >
            {item.label}
        </div>
    );

    return (
        <div className={prefix}>
            {map(options, renderItem)}
        </div>
    );
};

export default TabGroup;