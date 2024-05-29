import React from 'react';
import cls from 'classnames';

import { Cascader, CascaderProps } from 'antd';

import styles from './index.module.less';

const FormCascader: React.FC<CascaderProps<any>> = ({
    className,
    ...props
}) => {
    const prefix = cls(styles.container, className);

    return <Cascader className={prefix} {...props} />;
};

export default FormCascader;