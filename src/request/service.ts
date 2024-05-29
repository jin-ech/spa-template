/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-26 14:22:46
 * @LastEditors: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @LastEditTime: 2024-01-05 17:25:46
 * @FilePath: \spa-template\src\request\service.ts
 * @Description: 请求服务
 */

import { createService } from './utils';
import { AxiosRequestConfig } from 'axios';

// 接口服务
const service = createService({ responsePath: 'data' });
// 下载服务
const downloadService = createService({});

/**
 * @description: 下载方法
 * @param {AxiosRequestConfig} params
 * @return {*}
 */
export const download = (params: AxiosRequestConfig & { fileName?: string }): Promise<any> => downloadService({
    responseType: 'blob',
    ...params
}).then((res: any) => {
    const {
        data: blob,
        headers: { 'content-disposition': contentDisposition }
    } = res;
    const fileName = params.fileName ?? decodeURIComponent(
        contentDisposition.split('=')[1]
    );
    const navigator: any = window.navigator;
    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
        return;
    }
    const selfURL = window.URL || window.webkitURL;
    params.url && selfURL.revokeObjectURL(params.url);
    const toBlobUrl = selfURL.createObjectURL(blob);
    const aEl = document.createElement('a');
    aEl.href = toBlobUrl;
    aEl.download = fileName.replaceAll('\"', '');
    aEl.click();
}).catch((error: unknown) => {
    console.error(error);
});

export const upload = (params: any) => {
    const { url = '/file', ...data } = params;
    const formData = Object.keys(data).reduce((res: FormData, key: string) => {
        res.append(key, data[key]);
        return res;
    }, new FormData());
    return service.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export * from './utils';
export default service;