/*
 * @Author: WIN-J7OL7MK489U\EDY 13478707150@163.com
 * @Date: 2023-05-29 11:42:58
 * @LastEditors: WIN-JK0MIV6Q22K\EDY 13478707150@163.com
 * @LastEditTime: 2024-05-30 17:08:21
 * @FilePath: \spa-template\src\App.tsx
 * @Description: 入口文件
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import i18nZhCN from '@/local/zh_CN';
import i18nEnUS from '@/local/en_US';

import './App.less';

const language = process.env.LANGUAGE;

dayjs.locale(language);

export const lngs = {
    ['zh-cn']: { antd: zhCN, i18n: 'zhCN', nativeName: '中文' },
    ['en-us']: { antd: enUS, i18n: 'enUS', nativeName: 'English' }
};

export const locale = lngs[language];

const resources = {
    zhCN: i18nZhCN,
    enUS: i18nEnUS
};

i18next
    // 检测用户当前使用的语言
    // 文档: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // 注入 react-i18next 实例
    .use(initReactI18next)
    // 初始化 i18next
    // 配置参数的文档: https://www.i18next.com/overview/configuration-options
    .init({
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        resources,
        fallbackLng: locale.i18n,
        // lng: locale.i18n // 这里是默认语言，也就是初始显示的语言类型
    });

const i18n = i18next;
export default i18n;