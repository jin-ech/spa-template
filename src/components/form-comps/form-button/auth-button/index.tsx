import React, { useMemo } from 'react';
import cls from 'classnames';
import { useHistory } from 'react-router';

import { Button, ButtonProps } from 'antd';

import { AUTH_ENUM } from '@/constants/auth';

import useUserInfo from '@/hooks/useUserInfo';

import styles from './index.module.less';

interface AuthButtonProps extends ButtonProps {
    authCode?: number;
    optCode?: string | number;
}

// 权限功能
export const useAuth = ({
    optCode,
    authCode
}: { optCode: string | number; authCode: string | number; }) => {
    const { user } = useUserInfo();
    const history = useHistory();

    const pathname = useMemo(() => history.location.pathname, [history]);

    const isAuth = useMemo(() => {
        if (!user?.role) {
            return false;
        }
        const commandControl = user?.role?.command_control;
        const authPool = commandControl?.reduce((res: any[], code: string) => {
            // @ts-ignore
            const cmd = AUTH_ENUM[+code];
            if (cmd) {
                res.push(cmd);
            }
            return res;
        }, []);
        // @ts-ignore
        const authItem = authPool?.find((item: any) => +item.value === +AUTH_ENUM[authCode].value);
        const targetAuth = authItem?.options?.find((item: any) => item.path === pathname);
        return targetAuth?.optCode === optCode;
    }, [user?.userid, pathname]);

    return {
        isAuth
    };
};

const AuthButton: React.FC<AuthButtonProps> = ({
    className,
    value,
    children,
    authCode,
    optCode,
    ...props
}) => {
    const prefix = cls(styles.container, className);
    const { isAuth } = useAuth({ optCode, authCode });

    if (!isAuth) {
        return;
    }

    return (
        <Button
            className={prefix}
            {...props}
        >
            {children}
        </Button>
    );
};

export default AuthButton;