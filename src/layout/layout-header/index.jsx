/*
 * @Author: jinech 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-29 14:27:11
 * @FilePath: \spa-template\src\layout\layout-header\index.tsx
 * @Description: 基础布局-头部
 */

import React from 'react';
import { useHistory } from 'react-router';

import { Avatar, Dropdown, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const { Header } = Layout;

const LayoutHeader = ({
    user
}) => {
    const history = useHistory();

    return (
        <Header className={styles.container}>
            <div className={styles.left} onClick={() => history.push('/')}>Application</div>
            <div className={styles.right}>
                {/* <div className={styles.logo}></div> */}
                <Dropdown
                    menu={{
                        items: [
                            {
                                label: user?.username,
                                icon: <UserOutlined />,
                                style: { cursor: 'default' }
                            },
                        ]
                    }}
                >
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    );
};

export default LayoutHeader;
