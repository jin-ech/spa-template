/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-27 10:34:08
 * @LastEditors: DESKTOP-PJ5G56S\Administrator 13478707150@163.com
 * @LastEditTime: 2024-08-01 15:57:52
 * @FilePath: \spa-template\src\request\util.ts
 * @Description: 请求服务工具包
 */

import notification from '@/components/notification';
import axios from 'axios';
import { get, throttle } from 'lodash';
import { blackList as redirectBlackList } from '@/configure/routes';

export const isDev = process.env.NODE_ENV === 'development';
// export const baseURL = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}/api` : `${process.env.REACT_APP_BASE_URL}/api`;
export const baseURL = `${process.env.REACT_APP_BASE_URL}/api`;
export const localUrl = window.location.origin;
export const timeout = 1000 * 30;

const msgThrottle = throttle(msg => notification.error(msg), 5000);

/**
 * @description: 请求服务创建工具函数
 * @param {object} param1
 * @return {*}
 */
export const createService = ({ responsePath }: { responsePath?: string }) => {
    const service = axios.create({
        baseURL,
        timeout
    });

    service.interceptors.request.use(config => ({
        ...config,
        headers: (() => {
            const accessToken = localStorage.getItem('Authorization');
            if (accessToken) {
                return {
                    ...config.headers,
                    Authorization: accessToken
                };
            }
            return config.headers;
        })()
    }), error => {
        return Promise.reject(error);
    });

    service.interceptors.response.use(
        response => {
            const { data: { status, msg } } = response;
            switch (+status) {
                case 10000:
                    const inRedirectList = redirectBlackList.find(path => window.location.pathname.startsWith(path));
                    if (!inRedirectList) {
                        msgThrottle(msg);
                    }
                    if (!inRedirectList && !isDev) {
                        window.location.href = process.env.LOGIN_URL;
                        localStorage.setItem('lynkros-autologin', null);
                    }
                    break;
                case 0:
                    notification.error(msg);
                    return Promise.reject(msg);
                default:
                    return responsePath ? get(response, responsePath) : response;
            }
        },
        error => {
            const { data } = error.response || {};
            const msg = data?.msg;
            notification.error(msg ?? `${error}`);
            // return Promise.reject(error);
        }
    );

    return service;
};

export type Request<T, U> = (params: T) => Promise<U>;
export type AnyRequest = Request<any, any>;

