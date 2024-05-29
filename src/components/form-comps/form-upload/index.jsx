/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-08-23 11:28:00
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-10-08 10:46:28
 * @FilePath: \spa-template\src\components\form-comps\form-upload\index.jsx
 * @Description: 文件上传
 */

import React, { useEffect, useRef, useState } from 'react';

import {Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import FormButton from '../form-button';
import File from './file';
import Button from './button';

import { upload } from '@/request/service';

import styles from './index.module.less';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const FormUpload = ({ value, onChange, name = 'file', beforeUpload, buttonProps = {}, btnText = '上传照片' }) => {
    const ref = useRef();
    const [loading, updateLoading] = useState(false);
    const [imageUrl, updateImageUrl] = useState('');
    const lock = useRef(false);

    useEffect(() => {
        if (lock.current) {
            return;
        }
        updateImageUrl(value);
        value && (lock.current = true);
    }, [value]);

    const handleFileChange = async e => {
        const file = e.target?.files?.[0];
        try {
            await beforeUpload?.(file);
            updateLoading(true);
            const res = await upload({ file });
            if (res?.data?.status === 'done') {
                updateImageUrl(res?.data?.tmp_url);
                onChange?.(res?.data?.url);
            }
        }
        catch (err) {
            console.log('upload err: ', `${err}`);
        }
        finally {
            updateLoading(false);
        }
    };

    const handleBtnClick = () => {
        const inputDom = ref.current;
        inputDom.click();
    };

    const renderImageContent = () => {
        if (loading) {
            return <Spin indicator={antIcon} />;
        }
        if (imageUrl && !loading) {
            return <img src={imageUrl}></img>;
        }
        return;
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {renderImageContent()}
            </div>
            <div className={styles.footer}>
                <FormButton
                    className={styles.btn}
                    type='primary'
                    loading={loading}
                    onClick={handleBtnClick}
                    {...buttonProps}
                >{btnText}
                </FormButton>
                <input
                    ref={ref}
                    type="file"
                    accept='image/jpeg, image/png'
                    multiple={false}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
        </div>
    );
};

FormUpload.File = File;
FormUpload.Button = Button;

export default FormUpload;