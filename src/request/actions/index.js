/*
 * @Author: JC 13478707150@163.com
 * @Date: 2022-12-27 10:36:35
 * @LastEditors: jinech 13478707150@163.com
 * @LastEditTime: 2024-05-21 15:02:11
 * @FilePath: \spa-template\src\request\actions\index.ts
 * @Description: 请求方法导出
 */

import request, {
    download
} from '@/request/service';
import {
    exampleApi
} from '../api';

export const exampleGetAction = params => request.post(exampleApi, params);

export const getUserInfoAction = params => request.get(exampleApi, {
    params
});

export const exampleDownloadAction = async ({
    fileName,
    ...params
}) => download({
    url: exampleApi,
    fileName,
    method: 'post',
    data: params
});
