/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2024-01-09 17:01:05
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-19 16:09:41
 * @FilePath: \spa-template\src\components\form-comps\form-autocomplete\index.tsx
 * @Description: 自动完成
 */

import React from 'react';
import cls from 'classnames';
import { AutoComplete, AutoCompleteProps } from 'antd';

import styles from './index.module.less';

interface FormAutoCompleteProps extends AutoCompleteProps {
}

const FormAutoComplete: React.FC<FormAutoCompleteProps> = ({
    className,
    filterOption,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    const $filterOption = filterOption ?? ((inputVal, item) => {
        return (item?.label as string)?.includes(inputVal);
    });

    return (
        <AutoComplete
            className={prefix}
            filterOption={$filterOption}
            {...props}
        />
    );
};

export default FormAutoComplete;