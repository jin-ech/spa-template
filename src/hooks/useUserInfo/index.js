/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-27 13:54:52
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 15:03:20
 * @FilePath: \spa-template\src\hooks\useUserInfo.ts
 * @Description: 获取用户信息
 */

import { useState } from 'react';
import { useHistory } from 'react-router';

import { getUserInfoAction } from '@actions';
import { useStore } from '@/store/jcstore';
import context from '@/store';

const useUserInfo = () => {
    const history = useHistory();
    const [loading, updateLoading] = useState(false);
    const [store, updateStore] = useStore(context);

    /**
     * @description: 获取用户信息
     * @param {PersonalInfo} values
     * @return {*}
     */
    const getUserInfoTask = async values => {
        try {
            updateLoading(true);
            const res = await getUserInfoAction(values);
            updateStore(data => {
                data.username = res?.data?.username;
            });
            return res;
        }
        finally {
            updateLoading(false);
        }
    };

    /**
     * @description: 登出
     * @return {*}
     */
    const logout = path => {
        localStorage.setItem('Authorization', '');
        getUserInfoTask(store => store.username = null);
        history.replace(path ?? '/login');
    };

    return {
        loading,
        user: store,
        getUserInfoTask,
        logout
    };
};

export default useUserInfo;