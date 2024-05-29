
import React from 'react';
import cls from 'classnames';

import { Tag, TagProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './index.module.less';

interface FormTagProps extends TagProps {
    loading?: Boolean;
}

const FormTag: React.FC<FormTagProps> = ({
    className,
    children,
    loading = false,
    onClose,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    const handleClose: TagProps['onClose'] = (...args) => {
        if (loading) {
            return;
        }
        onClose?.(...args);
    };

    return (
        <Tag
            className={prefix}
            {...(loading ? ({ closeIcon: <LoadingOutlined /> }) : ({}))}
            onClose={handleClose}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default FormTag;