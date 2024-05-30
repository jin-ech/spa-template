
import React, { useMemo } from 'react';
import cls from 'classnames';

import styles from './index.module.less';

type Status = 'disabled' | 'processing' | 'success' | 'error' | 'warning';

interface FormStatusProps {
    className?: string;
    status: Status;
    children?: React.ReactElement;
}

const FormStatus: React.FC<FormStatusProps> = ({
    className,
    status,
    children
}) => {
    const prefix = cls(styles.container, className);

    const statusRenderer = useMemo(() => {
        if (status === 'processing') {
            return (
                <React.Fragment>
                    <div className={styles['process-dot-left']}></div>
                    <div className={styles['process-dot-right']}></div>
                </React.Fragment>
            );
        }
        return (
            <div className={cls(styles.dot, styles?.[status])}></div>
        );
    }, [status]);

    return (
        <div className={prefix}>
            <div className={styles.status}>
                {statusRenderer}
            </div>
            <div className={styles.label}>
                {children}
            </div>
        </div>
    )
};

export default FormStatus;