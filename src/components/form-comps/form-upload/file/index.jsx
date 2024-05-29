/*
 * @Author: JC96821 13478707150@163.com
 * @Date: 2023-06-17 13:52:46
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-10-08 10:46:10
 * @FilePath: \toeic-frontend-management\src\components\form-comps\FormUpload\index.jsx
 * @Description: 单文件上传
 */

import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';

import { Button } from 'antd';
import { LinkOutlined, DeleteOutlined } from '@ant-design/icons';

import { upload } from '@/request/service';

import styles from './index.module.less';

const File = ({ className = '', value, onChange, beforeUpload, buttonProps = {}, bnText = '上传附件' }) => {
    const prefix = cls(styles.container, className);
    const ref = useRef();
    const [loading, updateLoading] = useState(false);
    const [fileName, updateFileName] = useState('');
    const [fileUrl, updateFileUrl] = useState('');
    const lock = useRef(false);

    useEffect(() => {
        if (lock.current) {
            return;
        }
        updateFileUrl(value?.fileUrl);
        updateFileName(value?.fileName);
        value && (lock.current = true);
    }, [value]);

    const handleFileChange = async e => {
        const file = e.target?.files?.[0];
        try {
            await beforeUpload?.(file);
            updateLoading(true);
            const res = await upload({ file });
            if (res?.data?.status === 'done') {
                updateFileUrl(res?.data?.tmp_url);
                updateFileName(res?.data?.name);
                onChange?.(res?.data?.url);
                lock.current = true;
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

    const handleDeleteFile = () => {
        updateFileUrl('');
        updateFileName('');
        onChange?.();
    };

    return (
        <div className={prefix}>
            <div className={styles.upload}>
                <Button
                    className={styles.btn}
                    type='primary'
                    loading={loading}
                    onClick={handleBtnClick}
                    {...buttonProps}
                >
                    {bnText}
                </Button>
                <input
                    ref={ref}
                    type="file"
                    accept='image/jpeg, image/png'
                    multiple={false}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
            {fileUrl && (
                <div className={styles.file}>
                    <a href={fileUrl} target='_blank' rel="noreferrer">
                        <LinkOutlined style={{ marginRight: 8 }} />
                        {fileName}
                    </a>
                    <DeleteOutlined className={styles.trush} onClick={handleDeleteFile} />
                </div>
            )}
        </div>
    );
};

export default File;