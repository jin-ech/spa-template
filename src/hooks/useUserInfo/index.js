/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-27 13:54:52
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2023-12-12 17:05:00
 * @FilePath: \spa-template\src\hooks\useUserInfo.ts
 * @Description: 获取用户信息
 */

import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetail, userDetail } from '@/store/user.slice';

import { getUserInfoAction } from '@actions';

const useUserInfo = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const store = useSelector(userDetail);
    const [loading, updateLoading] = useState(false);

    /**
     * @description: 全局挂载用户信息
     * @param {any} values
     * @return {*}
     */
    const dispatchUserInfo = values => {
        dispatch(updateUserDetail(values));
    };

    /**
     * @description: 获取用户信息
     * @param {PersonalInfo} values
     * @return {*}
     */
    const getUserInfoTask = async values => {
        try {
            updateLoading(true);
            const res = await getUserInfoAction(values);
            dispatchUserInfo(res?.data);
            return res;
        }
        catch {
            dispatch(updateUserDetail(null));
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
        // localStorage.setItem('Authorization', '');
        // dispatchUserInfo(null);
        // history.replace(path ?? '/login');
    };

    return {
        loading,
        user: store.detail,
        getUserInfoTask,
        dispatchUserInfo,
        logout
    };
};

export default useUserInfo;