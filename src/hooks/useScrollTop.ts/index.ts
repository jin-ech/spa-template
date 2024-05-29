/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-27 13:54:52
 * @LastEditors: JC 13478707150@163.com
 * @LastEditTime: 2022-12-30 16:37:36
 * @FilePath: \spa-template\src\hooks\useUserInfo\index.ts
 * @Description: 获取用户信息
 */

import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';

const useScrollTop = () => {
    const route = useRouteMatch();

    useEffect(() => {
        document.querySelector('#layout-main').scrollTo(0, 0);
    }, [route]);

};

export default useScrollTop;