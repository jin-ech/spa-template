/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-22 17:27:02
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-11 18:18:46
 * @FilePath: \spa-template\src\components\form-comps\form-input\index.tsx
 * @Description: 选择框
 */

import React from 'react';
import cls from 'classnames';
import { Input, InputProps } from 'antd';
import { SearchProps } from 'antd/lib/input';

import styles from './index.module.less';

interface FormInputProps extends InputProps {
}

const Search: React.FC<SearchProps> = ({
    className,
    ...props
}) => {
    const prefix = cls(styles.container, className);
    return (
        <div className={styles.wrapper}>
            <Input.Search className={prefix} {...props} />
        </div>
    );
};

const FormInput: React.FC<FormInputProps> & {
    Search: React.FC<SearchProps>;
    TextArea: typeof Input.TextArea;
    Password: typeof Input.Password;
} = ({ className, ...props }) => {
    const prefix = cls(styles.container, className);

    return (
        <div className={styles.wrapper}>
            <Input className={prefix} autoComplete='new-input' {...props} />
        </div>
    );
};

FormInput.Search = Search;
FormInput.TextArea = Input.TextArea;
FormInput.Password = Input.Password;

export default FormInput;