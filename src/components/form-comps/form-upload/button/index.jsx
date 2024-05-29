/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-23 11:37:27
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-03-28 16:47:54
 * @FilePath: \spa-template\src\components\form-comps\form-upload\button\index.jsx
 * @Description: 按钮文件上传，没有回显
 */

import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';

import FormButton from '../../form-button';
// import { LinkOutlined, DeleteOutlined } from '@ant-design/icons';

import { upload } from '@/request/service';

import styles from './index.module.less';

const Button = ({
    className = '',
    url,
    value,
    onChange,
    onFail,
    beforeUpload,
    buttonProps = {},
    accept = 'image/jpeg, image/png',
    bnText = '上传附件'
}) => {
    const prefix = cls(styles.container, className);
    const ref = useRef();
    const [loading, updateLoading] = useState(false);
    const [key, updateKey] = useState('');

    const lock = useRef(false);

    useEffect(() => {
        if (lock.current) {
            return;
        }
        value && (lock.current = true);
    }, [value]);

    const handleFileChange = async e => {
        const file = e.target?.files?.[0];
        try {
            await beforeUpload?.(file);
            updateLoading(true);
            const res = await upload({ url, file });
            if ([0, 1].includes(res?.status)) {
                onChange?.(res?.data?.url);
                lock.current = true;
            }
        }
        catch (err) {
            console.log('upload err: ', `${err}`);
            onFail?.(err);
            updateKey(`${+new Date()}`);
        }
        finally {
            updateLoading(false);
        }
    };

    const handleBtnClick = () => {
        const inputDom = ref.current;
        inputDom.click();
    };

    return (
        <div className={prefix} key={key}>
            <div className={styles.upload}>
                <FormButton
                    className={styles.btn}
                    type='primary'
                    loading={loading}
                    onClick={handleBtnClick}
                    {...buttonProps}
                >
                    {bnText}
                </FormButton>
                <input
                    ref={ref}
                    type="file"
                    accept={accept}
                    multiple={false}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
        </div>
    );
};

export default Button;